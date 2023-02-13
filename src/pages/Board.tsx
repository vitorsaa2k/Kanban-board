import { Tasks } from "../components/Tasks";
import { Nav } from "../components/nav/Index";
import { Marker } from "../components/category/Marker";
import { useQuery } from "react-query";
import { MarkerType } from '../types/api';
import { useEffect, useState } from 'react'
import { DragDropContext, DropResult} from 'react-beautiful-dnd'
import { getBoard, updateBoard } from "../functions/axios";
import { StrictModeDroppable as Droppable } from "../components/StrictModeDroppable";
import { Loading } from "../components/Loading";
import { NewMarkerButton } from "../components/NewMarkerButton";


export function Board() {

  const { data, isLoading, refetch, isFetching } = useQuery<MarkerType[]>(['board'], getBoard)
  const [categorys, setCategorys] = useState(data)
  console.log(categorys)


  useEffect(() => {
    setCategorys(data)
  }, [data])

  async function sendBoard(result: DropResult) {
    if (!result.destination) return
    if (result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index) return 

    let [destination] = categorys!.filter((user) => user.title === result.destination!.droppableId)
    let destinationIndex = categorys!.indexOf(destination)

    let [source] = categorys!.filter((user) => user.title === result.source.droppableId)
    let sourceIndex = categorys!.indexOf(source)

    let user = categorys!
    let objectInMovement = source.tasks[result.source.index]

    user[sourceIndex].tasks.splice(result.source.index, 1)
    user[destinationIndex].tasks.splice(result.destination.index, 0 , objectInMovement)


    setCategorys(user)
    updateBoard(result).then((res) => {
      refetch()
    }) 
  }

  const markers = categorys?.map((marker: MarkerType) => {
    return (
        <div key={marker.title} className="self-start max-w-[322px]">
          <Marker refetch={refetch} color={marker.color} title={marker.title!}/>
          <div>
            <div>
                <Droppable droppableId={marker.title!}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <>
                        <Tasks tasks={marker.tasks} />
                      </>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
            </div>
          </div>
        </div>
    )
  })

  if(isLoading) {
    return <Loading />
  } else {
    return (
      <div>
        {isFetching && <Loading />}
        <Nav />
        <div className="flex justify-end m-8">
          <NewMarkerButton refetch={refetch} />
        </div>
        <div className="grid grid-cols-3 place-items-center gap-[10px]">
        <DragDropContext onDragEnd={sendBoard}>
          {markers}
        </DragDropContext>
        </div>
      </div>
    )
  }

  
}
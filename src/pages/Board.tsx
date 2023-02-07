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
    console.log(result)
    if (result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index) return 

    let destination = {...categorys!.filter((user) => user.title === result.destination!.droppableId)}
    let destinationIndex = categorys!.indexOf(destination[0])

    let source = {...categorys!.filter((user) => user.title === result.source.droppableId)}
    let sourceIndex = categorys!.indexOf(source[0])

    let user = categorys!

    if(result.destination.droppableId === result.source.droppableId) {
      let dest = {...source[0].tasks[result.source.index]}
      let sour = {...destination[0].tasks[result.destination.index]}
      user[destinationIndex].tasks[result.destination.index] = dest
      user[sourceIndex].tasks[result.source.index] = sour

    } else {
      user[destinationIndex].tasks.splice(result.destination.index, 0, source[0].tasks[result.source.index])
      user[sourceIndex].tasks.splice(result.source.index, 1)
    }

    setCategorys(user)
    updateBoard(result).then((res) => {
      console.log(res)
      refetch()
    }) 
  }

  const markers = categorys?.map((marker: MarkerType) => {
    return (
        <div className="self-start max-w-[322px]">
          <Marker color={marker.color} title={marker.title!}/>
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
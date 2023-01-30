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


export function Board() {

  const { data, isLoading, refetch, isFetching } = useQuery<MarkerType[]>(['board'], getBoard)
  const [categorys, setCategorys] = useState(data)
  console.log(categorys)

  useEffect(() => {
    setCategorys(data)
  }, [data])

  function sendBoard(result: DropResult) {
    if (!result.destination) return
    console.log(result)
    if (result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index) return 
    let destination = {...categorys!.filter((user) => user.title === result.destination!.droppableId)}
    console.log(destination)
    let destinationIndex = categorys!.indexOf(destination[0])
    let source = {...categorys!.filter((user) => user.title === result.source.droppableId)}
    let sourceIndex = categorys!.indexOf(source[0])
    let user = categorys!
    user[destinationIndex].tasks = [...user[destinationIndex].tasks, source[0].tasks[result.source.index]] /* .splice(result.destination.index, 0, destination[0].tasks[result.source.index]) */
    user[sourceIndex].tasks.splice(result.source.index , 1)
    setCategorys(user)
    updateBoard(result).then((res) => {
      console.log(res)
      refetch()
    })
    console.log(categorys) 
  }

  const markers = categorys?.map((marker: MarkerType) => {
    return (
        <div className="max-w-[322px]">
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
        <div className="grid grid-cols-3 place-items-center gap-[10px] my-36">
        <DragDropContext onDragEnd={sendBoard}>
          {markers}
        </DragDropContext>
        </div>
      </div>
    )
  }

  
}
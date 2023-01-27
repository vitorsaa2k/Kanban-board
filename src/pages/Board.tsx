import { Tasks } from "../components/Tasks";
import { Nav } from "../components/nav/Index";
import { Marker } from "../components/category/Marker";
import { Task } from "../components/category/Task";
import { useQuery } from "react-query";
import { MarkerType, TaskType } from '../types/api';
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { getBoard} from "../functions/axios";
import { StrictModeDroppable as Droppable } from "../components/StrictModeDroppable";


export function Board() {

  const { data, isLoading } = useQuery<MarkerType[]>(['board'], getBoard)
  console.log(data)

  const markers = data?.map((marker: MarkerType) => {
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
    return <div className="bg-green-700">Loading</div>
  } else {
    return (
      <div>
        <Nav />
        <div className="grid grid-cols-3 place-items-center gap-[10px] my-36">
        <DragDropContext onDragEnd={console.log}>
          {markers}
        </DragDropContext>
        </div>
      </div>
    )
  }

  
}
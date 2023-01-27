import { Task } from './category/Task'
import { MarkerType } from '../types/api'
import { Draggable } from 'react-beautiful-dnd'



export function Tasks({tasks}: MarkerType) {
  return (
    <>
      {
        tasks.map((prop, index) => {
          return (
            <Draggable key={prop.id} draggableId={prop.id} index={index}>
              {(provided) => (
                <Task 
                  task={prop.task} 
                  isCritical={prop.isCritical}
                  isDone={prop.isDone}
                  setIsDone={() => {}}
                  provided={provided}
                />
              )}
            </Draggable>
          )
        })
      }
    </>
  )
}
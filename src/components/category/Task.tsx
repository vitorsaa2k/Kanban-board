import { Trash } from "phosphor-react"
import { TaskComponentType } from "../../types/components"
import { Text } from "../Text"
import { CheckButton } from "./Check"

export function Task({task, isCritical, isDone, setIsDone, provided}: TaskComponentType) {
  console.log()

  return (
    <div {...provided?.dragHandleProps} {...provided?.draggableProps} ref={provided?.innerRef} className="flex flex-col justify-center p-1 m-2 bg-my-gray-200 rounded-lg">
      <div className="flex items-center gap-2 ml-1">
        <CheckButton setIsDone={setIsDone} isDone={isDone}/>
        {task}
      </div>
      <div className="flex justify-between">
        {
          isCritical ? (
            <div>
              <Text>Critical</Text>
            </div>
          ) : null
        }
        <Trash size={32}/>
      </div>
    </div>
  )
}
import { Trash } from "phosphor-react"
import { TaskComponentType } from "../../types/components"
import { Text } from "../Text"
import { CheckButton } from "./Check"

export function Task({task, isCritical, isDone, setIsDone, provided}: TaskComponentType) {
  console.log()

  return (
    <div {...provided?.dragHandleProps} {...provided?.draggableProps} ref={provided?.innerRef} className={`flex ${isCritical ? 'flex-col' : ''} justify-between p-1 m-2 bg-my-gray-200 rounded-lg shadow-taskShadow`}>
      <div className="flex items-center gap-2 ml-1">
        <CheckButton setIsDone={setIsDone} isDone={isDone}/>
          {task}
      </div>
        {
          isCritical ? (
            <div className="flex m-1 items-center justify-between">
              <div className="bg-my-red-200 border-[1px] px-3 h-[24px] border-my-red-600 rounded-lg flex justify-center items-center">
                <Text className="text-my-red-600">Critical</Text>
              </div>
              <Trash className="hover:cursor-pointer" size={32}/>
            </div>
          ) : (
            <div className="flex m-1 items-center">
              <Trash className="hover:cursor-pointer" size={32}/>
            </div>
          )
        }
    </div>
  )
}
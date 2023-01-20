import { Trash } from "phosphor-react"
import { Text } from "../Text"
import { CheckButton } from "./Check"


interface TaskProps {
  task: string
  isCritical: boolean
  isDone: boolean
  setIsDone: Function
}


export function Task({task, isCritical, isDone, setIsDone}: TaskProps) {
  return (
    <div>
      <CheckButton setIsDone={setIsDone} isDone={isDone}/>
      <div>
        {task}
      </div>
      {
        isCritical ? (
          <div>
            <Text>Critical</Text>
          </div>
        ) : null
      }
      <Trash />
    </div>
  )
}
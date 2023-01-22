import { Trash } from "phosphor-react"
import { useState } from "react"
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
    <div className="flex flex-col justify-center p-1 m-2 bg-my-gray-200 rounded-lg">
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
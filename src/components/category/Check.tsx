import { Check } from "phosphor-react"
import clsx from "clsx"


interface CheckProps {
  isDone: boolean
  setIsDone: Function
}
"rounded-full border w-4 h-4"

export function CheckButton({isDone, setIsDone}: CheckProps) {
  return (
    <div onClick={() => setIsDone()} className={clsx(
      'rounded-full w-4 h-4 hover:cursor-pointer',
      {
        'bg-my-green': isDone == true,
        'border-solid border border-black': isDone == false,
      }
    )}>
      {
        isDone ? <Check className=""/> : null
      }

    </div>
  )
}
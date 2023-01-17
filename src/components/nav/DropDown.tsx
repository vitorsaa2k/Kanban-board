import { Text } from "../Text";
import { clsx } from "clsx"

interface DropDownProps {
  isShowing: boolean
}

export function DropDown({isShowing}: DropDownProps) {

  return (
    <div className={clsx(
      "bg-my-gray-200 right-0 p-3 flex flex-col absolute transform transition-all duration-150 ease-in-out",
      {
        "opacity-0 translate-y-0 ": isShowing == false,
        "opacity-100 translate-y-2 ": isShowing == true,
      }
    )}>
      <button><Text>Log Out</Text></button>
      <button><Text>Delete</Text></button>
    </div>
  )
}
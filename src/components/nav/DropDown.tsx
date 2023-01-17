import { Text } from "../Text";
import { clsx } from "clsx"

interface DropDownProps {
  isShowing: boolean
}

export function DropDown({isShowing}: DropDownProps) {

  return (
    <div className={clsx(
      "bg-my-gray-200 w-28 rounded-lg p-2 right-0 flex flex-col absolute transform transition-all duration-150 ease-in-out",
      {
        "opacity-0 translate-y-[-10px] ": isShowing == false,
        "opacity-100 translate-y-0 ": isShowing == true,
      }
    )}>
      <button className="hover:bg-slate-400 rounded-lg px-2"><Text>Log out</Text></button>
      <button className="hover:bg-slate-400 rounded-lg px-2"><Text>Delete</Text></button>
    </div>
  )
}
import { Text } from "../Text"
import clsx from "clsx"
import { useState } from "react"
import { Check } from "phosphor-react"

export function Checkbox({label, isChecked, handleClick}: {label: string, isChecked: boolean, handleClick: CallableFunction}) {
  return (
    <label className="flex items-center m-2 gap-1">
      {isChecked ? (
        <div  className="relative flex hover:cursor-pointer">
        <input onClick={() => {handleClick()}}
          className={clsx(
            "appearance-none bg-transparent rounded-sm ring-1 p-2",
            "hover:shadow-check"
          )}
          type={"checkbox"}
        >
        </input>
            <Check className="absolute top-[1px]" />
        </div>
      ) : (
        <input onClick={() => {handleClick()}}
          className={clsx(
            "appearance-none bg-transparent rounded-sm ring-1 p-2",
            "hover:shadow-check hover:cursor-pointer"
          )}
          type={"checkbox"}
        ></input>
      )}

      <Text className="text-white">{label}</Text>
    </label>
  )
}
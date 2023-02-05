import { InputHTMLAttributes } from "react";



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  name: string
}

export function Input(InputProps: InputProps) {
  return (
    <input autoComplete="off" {...InputProps.register(`${InputProps.name}`)} className="w-full px-4 py-3 rounded-lg outline-none focus:ring-1 ring-my-gray-800 "
      {...InputProps}
    />
  )
}
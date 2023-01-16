import { InputHTMLAttributes } from "react";



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any
  name: string
}

export function Input(InputProps: InputProps) {
  return (
    <input {...InputProps.register(`${InputProps.name}`)}
      {...InputProps}
    />
  )
}
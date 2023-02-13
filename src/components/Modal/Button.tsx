import { ButtonComponentType } from "../../types/components";


export function Button(props : ButtonComponentType) {
  return (
    <button
      {...props}
      className="hover:bg-slate-400/75 rounded-lg px-4 py-1"
    >{props.children}</button>
  )
}
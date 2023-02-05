

export function Button({handleClick, children} : {handleClick?: Function, children: string}) {
  return (
    <button
      onClick={() => handleClick?.()}
      className="hover:bg-slate-400/75 rounded-lg px-4 py-1"
    >{children}</button>
  )
}
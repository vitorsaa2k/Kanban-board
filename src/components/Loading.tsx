import { createPortal } from "react-dom"

export function Loading() {
  return createPortal(<IsLoading />, document.getElementById('modal')!)
}

function IsLoading() {
  return <div className="fixed z-[1] bottom-0 left-0 right-0 top-0 bg-black/70"></div>
}
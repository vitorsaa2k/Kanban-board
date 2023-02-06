import { createPortal } from "react-dom"
import { Oval } from "react-loader-spinner"

export function Loading() {
  return createPortal(<IsLoading />, document.getElementById('modal')!)
}

function IsLoading() {
  return <div className="fixed z-[1] bottom-0 left-0 right-0 top-0 bg-black/70">
    <div className="w-screen h-screen flex justify-center items-center">
      <Oval 
        height={30}
        width={30}
        color='#E6E6E6'
        secondaryColor="404040"
      />
    </div>
  </div>
}
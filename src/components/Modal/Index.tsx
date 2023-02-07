import { createPortal } from "react-dom";
import { ModalComponentType } from "../../types/components";




export default function({cancel, children}: ModalComponentType) {
  return createPortal(
  <Modal 
    children={children}
    cancel={cancel}
  />,
  document.getElementById('modal')!)
}

function Modal({cancel, children}: ModalComponentType) {
  return (
    <div>
    <div onClick={cancel} className="fixed z-[1] bottom-0 left-0 right-0 top-0 bg-black/70"></div>
      <div className="bg-my-gray-200 w-[678px] rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]">
        {children}
      </div>
    </div>

  )
}
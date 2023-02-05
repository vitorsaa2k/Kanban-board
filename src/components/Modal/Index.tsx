import { useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { ModalComponentType } from "../../types/components";
import { Input } from "../Input";
import { Text } from "../Text";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";




export default function({cancel, comfirm, placeholder, title, description, isTask}: ModalComponentType) {
  return createPortal(
  <Modal 
    title={title}
    description={description}
    placeholder={placeholder}
    isTask={isTask}
    cancel={cancel}
    comfirm={comfirm}
  />,
  document.getElementById('modal')!)
}

function Modal({cancel, comfirm, placeholder, title, description, isTask}: ModalComponentType) {
  const { register, handleSubmit } = useForm()
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
    <div onClick={cancel} className="fixed z-[1] bottom-0 left-0 right-0 top-0 bg-black/70"></div>
      <div className="bg-my-gray-200 w-[678px] rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]">
        <form className="flex flex-col p-4 gap-2">
        <Text size="lg" className="">{title}</Text>
        {description && <Text>{description}</Text>}
        <Input name={placeholder!.length > 0 ? `${placeholder}` : 'default placeholder'} register={register}  placeholder={placeholder}/>
        {isTask && <Checkbox handleClick={() => setIsChecked(prev => !prev)} isChecked={isChecked} label="Mark task as critical" />}
        <div className="flex justify-end" >
          <Button handleClick={cancel}>Cancel</Button>
          <Button handleClick={comfirm}>Comfirm</Button>
        </div>
        </form>
      </div>
    </div>

  )
}
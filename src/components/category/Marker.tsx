import { Text } from "../Text";
import { Plus } from "phosphor-react";
import { useState } from "react";
import Modal from '../Modal/Index'
import { Button } from "../Modal/Button";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "../Input";

interface MarkerProps {
  title: string
  color?: string
}


export function Marker({title}: MarkerProps) {
  const checkColor = () => {
    if(title === 'To do') {
      return 'bg-[#0080FE]'
    } else if (title === 'Doing') {
      return 'bg-[#F08538]'
    } else if (title === 'Done') {
      return 'bg-[#79A41F]'
    } else {
      return 'bg-my-gray-800'
    }
  }


  const [isShowing, setIsShowing] = useState(false)
  return (
    <div className={`flex items-center justify-center relative rounded-lg w-[322px] h-[54px] ${checkColor()}`}>
      {isShowing && 
      <MarkerModal cancel={() => setIsShowing(false)} />}
      <Text size="lg" className="text-white self-center">{title}</Text>
      <div onClick={() => {setIsShowing(true)}} className="absolute right-4 hover:cursor-pointer">
        <Plus color="#FFF" size={32}/>
      </div>

    </div>
  )
}

function MarkerModal({cancel}: {cancel: Function}) {

  const {register, handleSubmit} = useForm()

  function submitApi(data: FieldValues) {
    console.log(data)
  }

  return (
    <Modal
      cancel={() => {cancel()}}
      >
        <form onSubmit={handleSubmit(submitApi)} className="flex flex-col p-4 gap-2">
          <Text size="lg" className="">Choose the name of the marker</Text>
            <Input register={register} name='name' placeholder="Name"/>

          <div className="flex justify-end" >
            <Button handleClick={() => cancel()}>Cancel</Button>
            <Button>Comfirm</Button>
          </div>
        </form>
    </Modal>
  )
}
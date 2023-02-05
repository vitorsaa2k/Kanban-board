import { Text } from "../Text";
import { Plus } from "phosphor-react";
import { useState } from "react";
import Modal from '../Modal/Index'

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
      <Modal 
        title="Name of the marker"
        placeholder="Name"
        description=""
        isTask
        comfirm={() => {}}
        cancel={() => {setIsShowing(false)}}
      />}
      <Text size="lg" className="text-white self-center">{title}</Text>
      <div onClick={() => {setIsShowing(true)}} className="absolute right-4 hover:cursor-pointer">
        <Plus color="#FFF" size={32}/>
      </div>

    </div>
  )
}
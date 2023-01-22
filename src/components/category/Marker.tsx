import { Text } from "../Text";
import { Plus } from "phosphor-react";

interface MarkerProps {
  title: string
  color?: string
}


export function Marker({title, color}: MarkerProps) {
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
  console.log(checkColor)
  return (
    <div className={`flex items-center justify-center relative rounded-lg w-[322px] h-[54px] ${checkColor()}`}>
      <Text size="lg" className="text-white self-center">{title}</Text>
      <div className="absolute right-4 hover:cursor-pointer">
        <Plus color="#FFF" size={32}/>
      </div>

    </div>
  )
}
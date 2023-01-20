import { Text } from "../Text";
import { Plus } from "phosphor-react";

interface MarkerProps {
  title: string

}


export function Marker({title}: MarkerProps) {
  return (
    <div>
      <Text>{title}</Text>
      <Plus />
    </div>
  )
}
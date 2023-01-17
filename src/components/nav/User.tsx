import { Text } from "../Text";
import { CaretDown } from "phosphor-react";
import { useState } from "react";
import { DropDown } from "./DropDown";




export function User() {

  const [isShowing, setIsShowing] = useState<boolean>(true)
  const [show, setShow] = useState<boolean>(true)

  function flipDropDown() {
    if(isShowing) {
      setShow(prevState => !prevState)
      setTimeout(() => {
        setIsShowing(prevState => !prevState)
      }, 200);
    } else {
      setIsShowing(prevState => !prevState)
      setTimeout(() => {
        setShow(prevState => !prevState)
      }, 1);
    }
  }

  return (
    <div>
      <button onClick={flipDropDown} className="flex">
        <Text size="sm">User</Text>
        <CaretDown size={24}/>
      </button>
      {
        isShowing ? <DropDown isShowing={show}/> : null
      }  
    </div>
  )
}
import { useState } from "react";
import { Text } from "./Text";
import Modal from './Modal/Index'
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./Modal/Button";
import { pushMarker } from "../functions/axios";

export function NewMarkerButton({refetch}: {refetch: <TPageData>() => {}}) {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <>
      {isShowing && <NewMarkerModal refetch={refetch} cancel={() => setIsShowing(false)} />}
      <div
        onClick={() => {
          setIsShowing(true);
        }}
        className="bg-my-gray-200 rounded-lg py-1 px-2"
      >
        <button>
          <Text>New board</Text>
        </button>
      </div>
    </>
  );
}

function NewMarkerModal({cancel, refetch}: {cancel: Function, refetch: <TPageData>() => {} }) {

  const {register, handleSubmit} = useForm()

  async function submitApi(data: FieldValues) {
    console.log(data);
    await pushMarker(data)
    refetch()
    cancel()
  }

  return (
    <Modal
      cancel={() => {cancel()}}
      >
        <form onSubmit={handleSubmit(submitApi)} className="flex flex-col p-4 gap-2">
          <Text size="lg" className="">Choose the title of the marker</Text>

          <Input register={register} name='title' placeholder="Title"/>

          <div className="flex justify-end" >
            <Button handleClick={cancel}>Cancel</Button>
            <Button>Comfirm</Button>
          </div>

        </form>
    </Modal>
  )
}
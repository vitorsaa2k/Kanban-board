import { useState } from "react";
import { Nav } from "../components/nav/Index";
import { Marker } from "../components/category/Marker";
import { CheckButton } from "../components/category/Check";
import { Task } from "../components/category/Task";



export function Board() {

  const [sample, setSample] = useState([
    {
      title: 'To do',
      tasks: [
        {
          task: '',
          isCritical: false,
          isDone: false,
        }
      ]
    },
    {
      title: 'Doing',
      tasks: [
        {
          task: '',
          isCritical: false,
          isDone: false,
        }
      ]
    },
    {
      title: 'Done',
      tasks: [
        {
          task: '',
          isCritical: false,
          isDone: false,
        }
      ]
    },
  ])

  const markers = sample.map((marker) => {
    return (
      <div>
        <Marker title={marker.title}/>
        <div>
          <div>
            {
              marker.tasks.map((data) => {
                return (
                  <Task 
                    setIsDone={() => {}}
                    isCritical={data.isCritical} 
                    isDone={data.isDone} 
                    task={data.task} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Nav />
      {markers}
    </div>
  )
}
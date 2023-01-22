import { useState } from "react";
import { Nav } from "../components/nav/Index";
import { Marker } from "../components/category/Marker";
import { Task } from "../components/category/Task";



export function Board() {

  const [sample, setSample] = useState([
    {
      title: 'To do',
      color: '#0080FE',
      tasks: [
        {
          task: 'Center the div',
          isCritical: false,
          isDone: false,
        },
        {
          task: 'Center the div',
          isCritical: false,
          isDone: false,
        },
      ]
    },
    {
      title: 'Doing',
      color: '#F08538',
      tasks: [
        {
          task: 'Create a new button',
          isCritical: false,
          isDone: false,
        }
      ]
    },
    {
      title: 'Done',
      color: '#79A41F',
      tasks: [
        {
          task: 'Change the input color',
          isCritical: false,
          isDone: false,
        }
      ]
    },
    {
      title: 'a',
      color: '',
      tasks: [
        {
          task: 'Change the input color',
          isCritical: false,
          isDone: false,
        }
      ]
    },
    {
      title: 'a',
      color: '',
      tasks: [
        {
          task: 'Change the input color',
          isCritical: false,
          isDone: false,
        }
      ]
    },
    {
      title: 'a',
      color: '',
      tasks: [
        {
          task: 'Change the input color',
          isCritical: false,
          isDone: false,
        }
      ]
    },
  ])

  const markers = sample.map((marker) => {
    return (
      <div className="max-w-[322px]">
        <Marker color={marker.color} title={marker.title}/>
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
      <div className="grid grid-cols-3 place-items-center gap-[10px] my-36">
        {markers}
      </div>
    </div>
  )
}
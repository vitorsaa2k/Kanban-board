import { useState } from "react";
import { Nav } from "../components/nav/Index";
import { Marker } from "../components/category/Marker";
import { Task } from "../components/category/Task";
import { useQuery } from "react-query";
import axios from "axios";
import { MarkerType, TaskType } from '../types'
import { makeRequest, token } from "../functions/axios";


export function Board() {

  const { data, isLoading } = useQuery(['board'], async () => {
    return await axios.get('http://localhost:3000/kanban', {headers: {'Authorization' : `bearer ${token}` }}).then(res => res.data)
  })
  console.log(data)

  const markers = data?.map((marker: MarkerType) => {
    return (
      <div className="max-w-[322px]">
        <Marker color={marker.color} title={marker.title}/>
        <div>
          <div>
            {
              marker.tasks.map((data: TaskType) => {
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

  if(isLoading) {
    return <div className="bg-green-700">Loading</div>
  } else {
    return (
      <div>
        <Nav />
        <div className="grid grid-cols-3 place-items-center gap-[10px] my-36">
          {markers}
        </div>
      </div>
    )
  }

  
}
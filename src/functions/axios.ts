import { FieldValues } from 'react-hook-form';
import axios from "axios";
import { DropResult } from "react-beautiful-dnd";

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImlhdCI6MTY3MzcyNjQ5NX0.FCNSUExfJ4aoaSQLsKnlIiDS0l_pJ8BBMVwSkaoBfJc'

const baseInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'Authorization' : `bearer ${token}`}
})


export async function getBoard() {
  return await baseInstance({
    method: 'get',
    url: 'kanban',
  }).then(res => res.data)
}

export async function updateBoard(result: DropResult) {
  return await baseInstance.post('kanban/update', result).then(res => res.data)
}

export async function pushMarker(title: FieldValues) {
  return await baseInstance.post('kanban/newMarker', title).then(res => res.data)
}
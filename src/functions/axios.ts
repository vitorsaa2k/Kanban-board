import axios from "axios";

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

export async function updateBoard({body}: {body: Object}) {
  return await baseInstance.post('kanban/update', {body})
}
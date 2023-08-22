'use server'

import 'server-only'
import axios from 'axios'
import { Todo } from './types'

const client = axios.create({
  baseURL: 'https://64cfe63affcda80aff52469d.mockapi.io/api/v1/',
})

export async function getTodos() {
  const { data } = await client.get<Todo[]>('todos')
  return data
}

export async function addTodo(title: string) {
  await client.post('todos', { title, isDone: false })
}

export async function deleteTodo(id: string) {
  await client.delete(`todos/${id}`)
}

export type ClearTodoArgs = {
  id: string
  isDone: boolean
}

export async function clearTodo({ id, isDone }: ClearTodoArgs) {
  await client.put(`todos/${id}`, { id, isDone })
}

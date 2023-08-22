'use client'

import { useTodos } from '../queries'
import { TodoItem } from './todo-item'

export function TodoList() {
  const todos = useTodos()

  return (
    <ul>
      {todos.data?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  )
}

'use client'

import tw from 'tailwind-styled-components'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Spinner } from './ui/spinner'
import { useDeleteTodoAction } from '../queries'

const CloseIcon = tw(X)`w-4 h-4`

type DeleteTodoButtonProps = {
  todoId: string
}

export function TodoItemDeleteButton({ todoId }: DeleteTodoButtonProps) {
  const deleteTodo = useDeleteTodoAction()

  return (
    <Button variant="ghost" onClick={() => deleteTodo.mutate(todoId)}>
      {deleteTodo.isLoading ? <Spinner /> : <CloseIcon />}
    </Button>
  )
}

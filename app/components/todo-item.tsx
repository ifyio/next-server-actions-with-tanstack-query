import tw from 'tailwind-styled-components'
import { Todo } from '../types'
import { Checkbox } from './ui/checkbox'
import { HTMLProps } from 'react'
import { TodoItemDeleteButton } from './todo-item-delete-button'
import { useClearTodoAction } from '../queries'

type RootProps = {
  $disabled: boolean
} & HTMLProps<HTMLDivElement>

const Root = tw.div<RootProps>`
  h-[100px] 
  border-b
  flex 
  items-center 
  space-x-4
  ${(p) => p.$disabled && 'line-through opacity-50'}
`

const Label = tw.label`
  flex-1
  text-lg 
  leading-none 
  peer-disabled:cursor-not-allowed 
  peer-disabled:opacity-70
`

type TodoItemProps = {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
  const clearTodoAction = useClearTodoAction()
  return (
    <Root $disabled={todo.isDone}>
      <Checkbox
        id={todo.id}
        checked={todo.isDone}
        onCheckedChange={() => {
          clearTodoAction.mutate({
            id: todo.id,
            isDone: !todo.isDone,
          })
        }}
      />
      <Label htmlFor={todo.id}>{todo.title}</Label>
      <TodoItemDeleteButton todoId={todo.id} />
    </Root>
  )
}

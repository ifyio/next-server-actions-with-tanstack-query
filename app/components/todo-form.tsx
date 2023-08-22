'use client'

import tw from 'tailwind-styled-components'
import { Spinner } from './ui/spinner'
import { useState } from 'react'
import { FormSubmitEvent } from '../types'
import { Input as NInput } from './ui/input'
import { useAddTodoAction } from '../queries'

const Form = tw.form`
  flex 
  gap-4 
  relative
`

const Input = tw(NInput)`
  placeholder-gray-100 
  placeholder:opacity-30 
  text-lg 
  h-[100px]
  px-9
`

const SpinnerContainer = tw.div`
  absolute 
  top-0 
  right-9
  bottom-0 
  left-0
  flex 
  items-center 
  justify-end
  opacity-40 
`

export function TodoForm() {
  const addTodo = useAddTodoAction()
  const [todoText, setTodoText] = useState('')

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()
    addTodo.mutate(todoText)
    setTodoText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        disabled={addTodo.isLoading}
        placeholder="Add a task"
      />
      {addTodo.isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Form>
  )
}

import { ChangeEvent, FormEvent } from 'react'

export type FormSubmitEvent = FormEvent<HTMLFormElement>
export type InputChangeEvent = ChangeEvent<HTMLInputElement>

export type Todo = {
  id: string
  title: string
  isDone: boolean
}

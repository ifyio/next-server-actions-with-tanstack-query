'use client'

import tw from 'tailwind-styled-components'
import { useTodos } from '../queries'

const H1 = tw.h1`text-6xl`

export function TodoHeaderText() {
  const todos = useTodos()
  return <H1>Todos ({todos.data?.length})</H1>
}

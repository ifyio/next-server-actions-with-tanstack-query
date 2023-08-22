import {
  addTodo,
  getTodos,
  clearTodo,
  deleteTodo,
  ClearTodoArgs,
} from './actions'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}

export function useAddTodoAction() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => client.invalidateQueries(['todos']),
  })
}

export function useDeleteTodoAction() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => client.invalidateQueries(['todos']),
  })
}

export function useClearTodoAction() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (args: ClearTodoArgs) => clearTodo(args),
    onSuccess: () => client.invalidateQueries(['todos']),
  })
}

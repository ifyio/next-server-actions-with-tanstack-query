import tw from 'tailwind-styled-components'
import { getTodos } from './actions'
import { TodoForm } from './components/todo-form'
import { TodoList } from './components/todo-list'
import { getQueryClient } from './clients'
import { TodoHeaderText } from './components/todo-header-text'
import { dehydrate, Hydrate } from '@tanstack/react-query'

const Container = tw.div`
  container 
  w-[970px]
  flex
  flex-col
`

const Header = tw.header`
  h-[380px] 
  flex
  flex-col
  justify-center
  fixed
  w-full
  bg-white
`

const Main = tw.main`
  pt-[350px]
`

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['todos'], getTodos)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Header>
        <Container className="space-y-14">
          <TodoHeaderText />
          <TodoForm />
        </Container>
      </Header>
      <Main>
        <Container>
          <TodoList />
        </Container>
      </Main>
    </Hydrate>
  )
}

// TODO: NOTE: When non in a suspense boundary, there is an infinite loop of requests. Note that this is only the case when suspense is enabled for the query. When suspense is enabled, all queries must be wrapped with suspense
// TODO: VIDEO: How to add custom tailwind utilities

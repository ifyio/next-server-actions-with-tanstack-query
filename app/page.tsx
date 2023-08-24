import tw from 'tailwind-styled-components'
import { TodoForm } from './components/todo-form'
import { TodoList } from './components/todo-list'
import { TodoHeaderText } from './components/todo-header-text'

const Container = tw.div`
  container 
  max-w-[970px]
  flex
  flex-col
`

const Header = tw.header`
  h-[300px] 
  flex
  flex-col
  justify-end
  fixed
  w-full
  bg-white
`

const Main = tw.main`
  pt-[340px]
`

export default async function Home() {
  return (
    <>
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
    </>
  )
}

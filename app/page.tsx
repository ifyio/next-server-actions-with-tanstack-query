import tw from "tailwind-styled-components";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";

const Main = tw.main`flex flex-col justify-center items-center gap-8 h-screen`;

export default function Home() {
  return (
    <Main>
      <TodoForm />
      <TodoList />
    </Main>
  );
}

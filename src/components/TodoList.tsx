import { TodoInitialState, TodoType } from "../types/todo";
import Todo from "./Todo";

function TodoList({ todos }: { todos: TodoInitialState["todos"] }) {
  return (
    <div className="w-full flex flex-center flex-col gap-3">
      <h2 className="text-xl text-white font-medium tracking-wider">
        Görev Listesi
      </h2>
      <ul className="w-full flex-center flex gap-2 flex-col text-eee">
        {todos && todos.map((todo: TodoType) => <Todo todo={todo} />)}
      </ul>
    </div>
  );
}

export default TodoList;

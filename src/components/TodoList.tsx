import { useSelector } from "react-redux";
import { TodoType } from "../types/todo";
import Todo, { listStyle } from "./Todo";
import { RootState } from "../redux/store";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="w-full flex flex-center flex-col gap-3">
      <h2 className="text-xl text-white font-medium tracking-wider">
        Görev Listesi
      </h2>
      <ul className="w-full flex-center flex gap-2 flex-col text-eee">
        {(todos.length &&
          todos.map((todo: TodoType) => (
            <Todo todo={todo} key={todo.id} />
          ))) || (
          <li className={listStyle + " justify-center bg-todo-bg"}>
            Mevcut Görev Yok!
          </li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;

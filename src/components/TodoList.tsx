import Todo from "./Todo";

interface Todo {
  id: string;
  description: string;
  createAt: string;
  done: boolean;
}

const todos: Todo[] = [
  {
    id: "1",
    description: "merhabalar ben kemal",
    createAt: "444444",
    done: false,
  },
  {
    id: "2",
    description: "merhabalar ben murat",
    createAt: "555444",
    done: false,
  },
];

function TodoList() {
  return (
    <div className="w-full flex flex-center flex-col gap-3">
      <h2 className="text-xl text-white font-medium tracking-wider">
        Görev Listesi
      </h2>
      <ul className="w-full flex-center flex gap-2 flex-col text-eee">
        {todos && todos.map((todo: Todo) => <Todo todo={todo} />)}
      </ul>
    </div>
  );
}

export default TodoList;

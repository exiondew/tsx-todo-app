import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/todo";
import { addTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (!newTodo.trim().length) return alert("Todo Giriniz!");

    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999999).toString(),
      content: newTodo,
      done: false,
    };

    dispatch(addTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="rounded bg-todo w-full flex flex-col px-3 py-2 gap-2 lg:max-w-screen-md">
      <h1 className="text-xl text-white font-medium">Yeni Görev Ekle</h1>
      <hr />
      <div className="w-full flex flex-col items-end gap-2">
        <input
          className="border-none outline-none w-full py-1 px-2 rounded"
          type="text"
          value={newTodo}
          placeholder="todo ekle"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
        <button
          className="font-medium border px-5 py-1 rounded-md text-white duration-300 hover:bg-white hover:text-blue-500"
          onClick={handleCreateTodo}
        >
          Ekle!
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;

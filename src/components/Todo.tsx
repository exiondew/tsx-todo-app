import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { TodoType } from "../types/todo";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

export const listStyle =
  "rounded-md w-full flex gap-2 item-center lg:max-w-screen-md py-3 border px-2 bg-todo-bg";

function Todo({ todo }: { todo: TodoType }) {
  const dispatch = useDispatch();
  const { id, content } = todo;
  return (
    <li key={id} className={listStyle + " justify-between"}>
      <span>{content}</span>
      <div className="flex flex-center gap-1 *:cursor-pointer *:duration-200">
        <FaCheck className="hover:text-green-400" title="Tamamla" />
        <MdEdit className="hover:text-blue-400" title="Düzenle" />
        <MdDelete
          className="hover:text-red-400"
          title="Sil"
          onClick={() => dispatch(removeTodoById(id))}
        />
      </div>
    </li>
  );
}

export default Todo;

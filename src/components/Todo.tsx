import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { TodoType } from "../types/todo";
import { useDispatch } from "react-redux";
import {
  markTodoAsCompleted,
  markTodoAsIncomplete,
  deleteTodoById,
} from "../redux/todoSlice";

export const listStyle =
  "rounded-md w-full flex gap-2 item-center lg:max-w-screen-md py-3 border px-2 duration-300";

function Todo({ todo }: { todo: TodoType }) {
  const { id, content, done } = todo;
  const dispatch = useDispatch();
  return (
    <li
      className={
        listStyle + " justify-between " + (done ? "bg-green-700" : "bg-todo-bg")
      }
    >
      <span>{content}</span>
      <div className="flex flex-center gap-1 *:cursor-pointer *:duration-200">
        {done ? (
          <>
            <FaXmark
              className="hover:text-orange-400"
              onClick={() => dispatch(markTodoAsIncomplete(id))}
            />
            <MdDelete
              className="hover:text-red-400"
              title="Sil"
              onClick={() => dispatch(deleteTodoById(id))}
            />
          </>
        ) : (
          <>
            <FaCheck
              className="hover:text-green-400"
              title="Tamamla"
              onClick={() => dispatch(markTodoAsCompleted(id))}
            />
            <MdEdit className="hover:text-blue-400" title="Düzenle" />
            <MdDelete
              className="hover:text-red-400"
              title="Sil"
              onClick={() => dispatch(deleteTodoById(id))}
            />
          </>
        )}
      </div>
    </li>
  );
}

export default Todo;

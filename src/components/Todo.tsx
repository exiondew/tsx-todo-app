import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { TodoType } from "../types/todo";
import { useDispatch } from "react-redux";
import {
  markTodoAsCompleted,
  markTodoAsIncomplete,
  deleteTodoById,
  updateTodoById,
} from "../redux/todoSlice";
import { useState } from "react";

export const listStyle =
  "rounded-md w-full flex gap-2 item-center lg:max-w-screen-md p-3 duration-300";

function Todo({ todo }: { todo: TodoType }) {
  const { id, content, done } = todo;
  const dispatch = useDispatch();

  const [editedContent, setEditedContent] = useState<string>(content);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSaveEdit = () => {
    const updatedTodo: Omit<TodoType, "done"> = {
      id,
      content: editedContent,
    };
    dispatch(updateTodoById(updatedTodo));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedContent(content);
    setIsEditing(false);
  };
  return (
    <li
      className={
        listStyle +
        " justify-between " +
        (isEditing ? "bg-todo" : done ? "bg-green-700" : "bg-todo-bg")
      }
    >
      {isEditing ? (
        <input
          className="w-full border-b bg-transparent border-gray-300 outline-none mr-2 px-1 text-white"
          type="text"
          value={editedContent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedContent(e.target.value)
          }
        />
      ) : (
        <span>{content}</span>
      )}
      <div className="flex flex-center gap-1 *:cursor-pointer *:duration-200">
        {isEditing ? (
          <>
            <FaCheck
              className="hover:text-green-400"
              title="Düzenlemeyi Tamamla"
              onClick={handleSaveEdit}
            />
            <FaXmark
              className="hover:text-red-400 text-xl"
              title="Düzenlmeden Çık"
              onClick={handleCancelEdit}
            />
          </>
        ) : done ? (
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
            <MdEdit
              className="hover:text-blue-400"
              title="Düzenle"
              onClick={() => setIsEditing(true)}
            />
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

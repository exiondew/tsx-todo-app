import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

interface TodoType {
  id: string;
  description: string;
  createAt?: string;
  done: boolean;
}

function Todo({ todo }: { todo: TodoType }) {
  const { id, description } = todo;
  return (
    <li
      key={id}
      className="rounded-md w-full flex gap-2 item-center lg:max-w-screen-md py-3 border justify-between px-2 bg-todo-bg"
    >
      <span>{description}</span>
      <div className="flex flex-center gap-1 *:cursor-pointer *:duration-200">
        <FaCheck className="hover:text-green-400" title="Tamamla" />
        <MdEdit className="hover:text-blue-400" title="Düzenle" />
        <MdDelete className="hover:text-red-400" title="Sil" />
      </div>
    </li>
  );
}

export default Todo;

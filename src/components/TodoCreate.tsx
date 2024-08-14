import {} from "react";

function TodoCreate() {
  return (
    <div className="rounded bg-todo w-full flex flex-col px-3 py-2 gap-2 lg:max-w-screen-md">
      <h1 className="text-xl text-white font-medium">Yeni Görev Ekle</h1>
      <hr />
      <div className="w-full flex flex-col items-end gap-2">
        <input
          className="border-none outline-none w-full py-1 px-2 rounded"
          type="text"
          placeholder="todo ekle"
        />
        <button className="font-medium border px-5 py-1 rounded-md text-white duration-300 hover:bg-white hover:text-blue-500">
          Ekle!
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;

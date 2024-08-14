import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-bg pb-2 gap-3 pt-10">
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;

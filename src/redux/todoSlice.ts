import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/todo";

const initialTodoState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },
    deleteTodoById: (
      state: TodoInitialState,
      action: PayloadAction<string>
    ) => {
      const todoIndex = state.todos.findIndex(
        (todo: TodoType) => todo.id === action.payload
      );
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }
    },
    markTodoAsCompleted: (
      state: TodoInitialState,
      action: PayloadAction<string>
    ) => {
      const targetTodo = state.todos.find(
        (todo: TodoType) => todo.id === action.payload
      );

      if (targetTodo) targetTodo.done = true;
    },
    markTodoAsIncomplete: (
      state: TodoInitialState,
      action: PayloadAction<string>
    ) => {
      const targetTodo = state.todos.find(
        (todo: TodoType) => todo.id === action.payload
      );

      if (targetTodo) targetTodo.done = false;
    },
    updateTodoById: (
      state: TodoInitialState,
      action: PayloadAction<Omit<TodoType, "done">>
    ) => {
      const targetTodo = state.todos.find(
        (todo: TodoType) => todo.id === action.payload.id
      );

      if (targetTodo) targetTodo.content = action.payload.content;
    },
  },
});

export const {
  addTodo,
  deleteTodoById,
  markTodoAsCompleted,
  markTodoAsIncomplete,
  updateTodoById,
} = todoSlice.actions;

export default todoSlice.reducer;

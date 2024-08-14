import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/todo";

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },
    removeTodoById: (
      state: TodoInitialState,
      action: PayloadAction<string>
    ) => {
      const index = state.todos.findIndex(
        (todo: TodoType) => todo.id === action.payload
      );
      const removed = state.todos.splice(index, 1);
      console.log("removed: ", removed);
    },
  },
});

export const { createTodo, removeTodoById } = todoSlice.actions;
export default todoSlice.reducer;

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
  },
});

export const { createTodo } = todoSlice.actions;
export default todoSlice.reducer;

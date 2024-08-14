export interface TodoInitialState {
  todos: TodoType[];
}

export interface TodoType {
  id: string;
  content: string;
  done: boolean;
}

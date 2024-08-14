export interface TodoInitialState {
    todos: TodoType[]
}

export interface TodoType {
    id: string,
    content: string,
    create: string,
    done: boolean
}
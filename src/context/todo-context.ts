import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  addTodo: (todo: any) => {},
  deleteTodo: (todoID: any) => {},
  toggleTodo: (todoID: any) => {}
});

export default TodoContext;

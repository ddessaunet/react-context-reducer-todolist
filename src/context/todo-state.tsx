import React, { useReducer } from "react";
import { TodoActions } from "./todo-actions";
import TodoContext from "./todo-context";
import TodoReducer from "./todo-reducer";

type TodoStateProps = {
  children: React.ReactNode;
};

const TodoState = ({ children }: TodoStateProps): JSX.Element => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (todo: any) =>
    dispatch({ type: TodoActions.ADD_TODO, payload: todo });

  const toggleTodo = (todoID: any) =>
    dispatch({ type: TodoActions.TOGGLE_TODO, payload: todoID });

  const deleteTodo = (todoID: any) =>
    dispatch({ type: TodoActions.DELETE_TODO, payload: todoID });

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        toggleTodo,
        deleteTodo,
        todos: state.todos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;

import React from "react";
import TodoContext from "./todo-context";

type TodoStateProps = {
  children: React.ReactNode;
};

const TodoState = ({ children }: TodoStateProps): JSX.Element => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export default TodoState;

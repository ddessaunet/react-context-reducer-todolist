import React from "react";

import style from "./TodoList";

type TodoListProps = {
  children?: React.ReactNode;
};
export const TodoList = ({ children }: TodoListProps): JSX.Element => {
  return (
    <div>
      <h1>TodoList component</h1>
    </div>
  );
};

import React from "react";

import style from "./TodoInput";

type TodoInputProps = {
  children?: React.ReactNode;
};
export const TodoInput = ({ children }: TodoInputProps): JSX.Element => {
  return (
    <div>
      <h1>TodoInput component</h1>
    </div>
  );
};

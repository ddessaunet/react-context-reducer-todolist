import React from "react";

import "./TodoInput.css";

type TodoInputProps = {
  children?: React.ReactNode;
};
export const TodoInput = ({ children }: TodoInputProps): JSX.Element => {
  return (
    <div className="TodoInput_container">
      <h1>useCONTEXT + useREDUCER TO-DO LIST</h1>
      <input className="TodoInput_input" type="text" />
      <button className="TodoInput_button" onClick={() => {}}>
        ADD
      </button>
    </div>
  );
};

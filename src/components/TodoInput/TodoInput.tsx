import React, { useContext, useState } from "react";
import TodoContext from "../../context/todo-context";

import "./TodoInput.css";

type TodoInputProps = {
  children?: React.ReactNode;
};

export const TodoInput = ({ children }: TodoInputProps): JSX.Element => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <div className="TodoInput_container">
      <h1>useCONTEXT + useREDUCER TO-DO LIST</h1>
      <input
        className="TodoInput_input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="TodoInput_button"
        onClick={() =>
          addTodo({ id: Math.random(), text: todo, complete: false })
        }
      >
        ADD
      </button>
    </div>
  );
};

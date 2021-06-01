import React from "react";

import "./TodoList.css";

type TodoListProps = {
  children?: React.ReactNode;
};
export const TodoList = ({ children }: TodoListProps): JSX.Element => {
  return (
    <div className="TodoList_container">
      <h1>TO-DOS</h1>
      <ul className="TodoList_list">
        <li className="TodoList_element">
          <span>TODO TEXT</span>
          <div className="TodoList_buttons">
            <button onClick={() => {}}>TOGGLE</button>
            <button onClick={() => {}}>DELETE</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

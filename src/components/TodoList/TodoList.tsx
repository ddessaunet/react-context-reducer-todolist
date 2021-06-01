import React, { useContext } from "react";
import TodoContext from "../../context/todo-context";

import "./TodoList.css";

type TodoListProps = {
  children?: React.ReactNode;
};
export const TodoList = ({ children }: TodoListProps): JSX.Element => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="TodoList_container">
      <h1>TO-DOS</h1>
      <ul className="TodoList_list">
        {todos.map((todo: any) => (
          <li className="TodoList_element" key={`TodoList_${todo.id}`}>
            <span>{todo.text}</span>
            <div className="TodoList_buttons">
              <button onClick={() => {}}>TOGGLE</button>
              <button onClick={() => {}}>DELETE</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

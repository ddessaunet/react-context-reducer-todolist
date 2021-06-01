import React, { useContext } from "react";
import TodoContext from "../../context/todo-context";

import "./TodoList.css";

type TodoListProps = {
  children?: React.ReactNode;
};
export const TodoList = ({ children }: TodoListProps): JSX.Element => {
  const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);
  return (
    <div className="TodoList_container">
      <h1>TO-DOS</h1>
      <ul className="TodoList_list">
        {todos.map((todo: any) => (
          <li className="TodoList_element" key={`TodoList_${todo.id}`}>
            <span>{todo.text}</span>
            <div className="TodoList_buttons">
              <button onClick={() => toggleTodo(todo.id)}>TOGGLE</button>
              <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

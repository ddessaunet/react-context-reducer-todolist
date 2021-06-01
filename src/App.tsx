import "./styles.css";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoState from "./context/todo-state";

export default function App() {
  return (
    <div className="App">
      <div className="App_todoApp">
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  );
}

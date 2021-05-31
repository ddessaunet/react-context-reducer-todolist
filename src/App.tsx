import "./styles.css";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  return (
    <div className="App">
      <div className="App_todoApp">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

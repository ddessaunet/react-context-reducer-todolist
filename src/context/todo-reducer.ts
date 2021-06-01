import { TodoActions } from "./todo-actions";

const TodoReducer = (state: any, action: any) => {
  const { todos } = state;
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state,
        todos: [...todos, action.payload]
      };
    case TodoActions.DELETE_TODO:
      const filterTodos = todos.filter(({ id }: any) => id !== action.payload);
      return {
        ...state,
        todos: filterTodos
      };
    case TodoActions.TOGGLE_TODO:
      const toggleTodo = todos.find(({ id }: any) => id === action.payload);
      console.log(toggleTodo);
      return {
        ...state,
        todos: [
          ...todos.filter(({ id }: any) => id !== action.payload),
          {
            ...toggleTodo,
            complete: !toggleTodo.complete
          }
        ]
      };
    default:
      return state;
  }
};

export default TodoReducer;

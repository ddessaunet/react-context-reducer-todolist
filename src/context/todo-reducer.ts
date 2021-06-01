import { TodoActions } from "./todo-actions";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state
      };
    case TodoActions.DELETE_TODO:
      return {
        ...state
      };
    case TodoActions.TOGGLE_TODO:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default TodoReducer;

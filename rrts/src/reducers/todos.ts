import { Todo } from "../types/Todo";
import { ActionTypes, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};

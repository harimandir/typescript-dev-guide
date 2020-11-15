import { Todo } from "../types/Todo";
import { ActionTypes, FetchTodosAction } from "../actions";

export const todosReducer = (
  state: Todo[] = [],
  action: FetchTodosAction
): Todo[] => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};

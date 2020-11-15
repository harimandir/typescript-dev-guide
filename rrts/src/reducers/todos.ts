import { Todo } from "../types/Todo";
import { FetchTodosAction } from "../actions/index";
import { ActionTypes } from "./../types/ActionTypes";

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

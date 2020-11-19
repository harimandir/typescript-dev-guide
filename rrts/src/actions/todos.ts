import axios from "axios";
import { Action, Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import { Todo } from "../types/Todo";

export interface FetchTodosAction extends Action<ActionTypes.fetchTodos> {
  payload: Todo[];
}

export interface DeleteTodoAction extends Action<ActionTypes.deleteTodo> {
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(
      "http://jsonplaceholder.typicode.com/todos"
    );
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};

import axios from "axios";
import { Action, Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction extends Action {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
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

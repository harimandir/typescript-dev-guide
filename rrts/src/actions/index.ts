import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(
      "http://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: ActionTypes.fetchTodos, payload: response.data });
  };
};

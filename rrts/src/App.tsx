import React from "react";
import { connect } from "react-redux";
import { StoreState } from "./reducers";
import { Todo } from "./types/Todo";
import { fetchTodos } from "./actions";

interface AppProps {
  todos: Todo[];
  fetchTodos: () => any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div data-testid="App">Hello, World!</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);

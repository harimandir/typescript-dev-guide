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
  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo) => (
      <div>
        {todo.id}) {todo.title}
        {todo.completed ? " (completed)" : ""}
      </div>
    ));
  }

  render() {
    return (
      <div data-testid="App">
        <button onClick={this.props.fetchTodos}>Fetch Todos</button>
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);

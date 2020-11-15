import React from "react";
import { connect } from "react-redux";
import { StoreState } from "./reducers";
import { Todo } from "./types/Todo";
import { fetchTodos, deleteTodo } from "./actions";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    if (prevState.fetching && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo) => (
      <div key={todo.id}>
        {`${todo.id}) ${todo.title} `}
        {todo.completed ? (
          "(completed)"
        ) : (
          <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
        )}
      </div>
    ));
  }

  handleFetch = () => {
    this.setState({ fetching: true }, () => this.props.fetchTodos());
  };

  render() {
    return (
      <div data-testid="App">
        <button onClick={() => this.handleFetch()}>Fetch Todos</button>
        {this.state.fetching ? " Loading... " : null}
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

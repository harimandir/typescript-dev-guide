import React from "react";

interface AppProps {
  prop?: string;
}

class App extends React.Component<AppProps> {
  state = { value: 0 };

  handleIncrement = (): void => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = (): void => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div data-testid="App">
        props.prop == {this.props.prop}?
        <div>
          <button onClick={this.handleIncrement}>Increment value</button>
          <button onClick={this.handleDecrement}>Decrement value</button>
        </div>
        state.value == {this.state.value}
      </div>
    );
  }
}

export default App;

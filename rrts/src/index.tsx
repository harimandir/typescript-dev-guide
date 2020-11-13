import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  prop: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <div>prop == {this.props.prop}</div>;
  }
}

ReactDOM.render(<App prop="some property" />, document.getElementById("root"));

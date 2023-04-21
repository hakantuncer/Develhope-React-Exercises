import React, { Component } from "react";

function CounterButton(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}
// we passed with props.

export class ClickCounter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <CounterButton onClick={this.handleClick} text="Click Here!" />
      </div>
    );
  }
}

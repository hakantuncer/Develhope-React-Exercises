import React, { Component } from "react";

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
        <button onClick={this.handleClick}>Click Here!</button>
      </div>
    );
  }
}

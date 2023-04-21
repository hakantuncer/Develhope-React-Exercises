import React from "react";

import { CounterDisplay } from "/CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    }, this.props.interval);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
        <button
          onClick={() =>
            this.setState({ count: this.state.count + this.props.increment })
          }
        >
          Increment
        </button>
      </div>
    );
  }
}

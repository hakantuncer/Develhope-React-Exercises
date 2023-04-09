import React from "react";

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

// ComponentDidMount is already doing constructer's job.
//So we don't need to use constructer here but if we need
//for another job we can still use it.

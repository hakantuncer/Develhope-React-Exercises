import React, { Component } from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends Component {
  state = {
    name: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="name-input"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

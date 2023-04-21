import React, { Component } from "react";

export class ClickTracker extends Component {
  state = {
    lastClickedButton: null,
  };

  handleClick = (event) => {
    const buttonId = event.target.id;
    this.setState({ lastClickedButton: buttonId });
  };

  render() {
    return (
      <div>
        <h1>Last Clicked Button: {this.state.lastClickedButton}</h1>
        <button id="button1" onClick={this.handleClick}>
          Button 1
        </button>
        <button id="button2" onClick={this.handleClick}>
          Button 2
        </button>
        <button id="button3" onClick={this.handleClick}>
          Button 3
        </button>
      </div>
    );
  }
}

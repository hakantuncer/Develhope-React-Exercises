import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, remember } = this.state;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />

        <input
          type="password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />

        <input
          type="checkbox"
          id="remember"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />

        <button type="submit">Login</button>
      </form>
    );
  }
}

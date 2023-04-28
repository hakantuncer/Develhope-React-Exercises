import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    const { username, password, remember } = this.state;
    this.props.onLogin({ username, password, remember });
  };

  render() {
    const { username, password, remember } = this.state;
    const isLoginDisabled = username === "" || password === "";

    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        />

        <br />

        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleLogin} disabled={isLoginDisabled}>
          Login
        </button>
      </div>
    );
  }
}

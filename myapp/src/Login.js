import React, { Component } from "react";

export class UncontrolledLogin extends Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  rememberRef = React.createRef();

  componentDidMount() {
    this.usernameRef.current.focus();
  }

  handleLogin = () => {
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const remember = this.rememberRef.current.checked;

    this.props.onLogin({ username, password, remember });
  };

  handleReset = () => {
    this.usernameRef.current.value = "";
    this.passwordRef.current.value = "";
    this.rememberRef.current.checked = false;
  };

  render() {
    return (
      <div>
        <input type="text" name="username" ref={this.usernameRef} />

        <input type="password" name="password" ref={this.passwordRef} />

        <br />

        <input type="checkbox" name="remember" ref={this.rememberRef} />

        <button onClick={this.handleLogin}>Login</button>

        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

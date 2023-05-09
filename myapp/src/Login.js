import React, { useState, useRef } from "react";

export function UncontrolledLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleLogin = () => {
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const rememberValue = rememberRef.current.checked;

    props.onLogin({
      username: usernameValue,
      password: passwordValue,
      remember: rememberValue,
    });
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);

    usernameRef.current.value = "";
    passwordRef.current.value = "";
    rememberRef.current.checked = false;
  };

  const isLoginDisabled = username === "" || password === "";
  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        ref={usernameRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        name="password"
        ref={passwordRef}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <input
        type="checkbox"
        name="remember"
        ref={rememberRef}
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      />

      <button
        onClick={handleLogin}
        style={buttonStyle}
        disabled={isLoginDisabled}
      >
        Login
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

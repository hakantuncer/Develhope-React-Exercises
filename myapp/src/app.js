import React from "react";

class Hello extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

class Message extends React.Component {
  render() {
    return <p>What a beautiful day!</p>;
  }
}
export class RenderApp extends React.Component {
  render() {
    return (
      <div className="potato">
        <Hello />
        <Message />
      </div>
    );
  }
}

import React from "react";

class Hello extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export class RenderApp extends React.Component {
  render() {
    return (
      <div className="potato">
        <Hello />
      </div>
    );
  }
}

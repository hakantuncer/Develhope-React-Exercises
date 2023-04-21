import React from "react";
import { Welcome } from "./Welcome";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

function Adrian(name) {
  return <strong>{name}</strong>;
}

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
      <div className="">
        <Hello />
        <Welcome name="Adrian" age="28" />
        <Counter start={0} increment={2} />
        <ClickCounter />
        <ClickTracker />
        <Clock />
      </div>
    );
  }
}

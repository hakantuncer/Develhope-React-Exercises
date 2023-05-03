import React, { Component } from "react";

export class Colors extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    );
  }
}

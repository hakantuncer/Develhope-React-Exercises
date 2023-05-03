import React, { Component } from "react";

export class TodoList extends Component {
  state = {
    items: [],
    newItem: "",
  };

  handleInputChange = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };

  handleAddItem = () => {
    const { items, newItem } = this.state;
    this.setState({
      items: [...items, newItem],
      newItem: "",
    });
  };

  handleReset = () => {
    this.setState({
      items: [],
      inputValue: "",
    });
  };

  handleRemoveItem = (index) => {
    const { items } = this.state;
    this.setState({ items: items.filter((item, i) => i !== index) });
  };

  render() {
    const { items, newItem } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleRemoveItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <input type="text" value={newItem} onChange={this.handleInputChange} />

        <button onClick={this.handleAddItem}>Add Todo</button>

        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

import React from "react";

export class age extends React.Component {
  render() {
    const age = this.props.age;
    return (
      <span>{age > 18 ? `Your age is ${age}` : "You are very young!"}</span>
    );
  }
}

export class Welcome extends React.Component {
  render() {
    const age = this.props.age;
    const name = this.props.name;
    return (
      <div>
        <p> Welcome, {name}!</p>;{age && <age age={age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User",
};

// I modified the code for age prop. Greater than 18, less than 65 and name is 'John'.

import React from "react";

export class age extends React.Component {
  render() {
    return <span>Your age is {this.props.age}</span>;
  }
}

export class Welcome extends React.Component {
  render() {
    const age = this.props.age;
    return (
      <div>
        <p> Welcome, {this.props.name}!</p>;{age > 18 && <age age={age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User",
};

// I modified the code for age prop.

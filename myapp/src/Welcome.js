import React from "react";

export class age extends React.Component {
  render() {
    return <span>Your age is {this.props.age}</span>;
  }
}

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, {this.props.name}!</p>;
        <age age={this.props.age} />;
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User",
};

/* JSX expression will pass as a normal prop. You can use curly brackets to pass props which contains JSX expression.*/

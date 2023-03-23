import React from "react";
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, {this.props.name}!</p>;<p>Your age is {this.props.age}</p>;
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User",
};

/* JSX expression will pass as a normal prop. You can use curly brackets to pass props which contains JSX expression.*/

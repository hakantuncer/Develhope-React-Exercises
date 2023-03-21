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

/* If no name prop is passed to the Welcome component,
   the component will still render, but the message 
   inside the p tag will just say "Welcome, !", with 
   no name displayed. */

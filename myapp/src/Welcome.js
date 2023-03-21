import React from "react";
export class Welcome extends React.Component {
  render() {
    return <p> Welcome, {this.props.name}!</p>;
  }
}

Welcome.defaultProps = {
  name: "User",
};

/* If no name prop is passed to the Welcome component,
   the component will still render, but the message 
   inside the p tag will just say "Welcome, !", with 
   no name displayed. */

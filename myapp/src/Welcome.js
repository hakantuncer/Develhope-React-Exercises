import React from "react";

function Age({ age }) {
  return <span>{age > 18 ? `Your age is ${age}` : "You are very young!"}</span>;
}

export default function Welcome({ name = "User", age }) {
  return (
    <div>
      <p> Welcome, {name}!</p>
      {age && <Age age={age} />}
    </div>
  );
}

Welcome.defaultProps = {
  name: "User",
};

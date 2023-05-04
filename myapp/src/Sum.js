import React from "react";

function Sum({ numbers }) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return <h1> {sum}</h1>;
}

Sum.defaultProps = {
  numbers: [0, 0, 0],
};

// If the numbers prop of the Sum component is not set, it will be undefined.
//To set a default value for the numbers prop, we can use the defaultProps property

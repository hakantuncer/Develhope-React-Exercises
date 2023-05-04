import React from "react";

function Sum({ numbers }) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return <h1> {sum}</h1>;
}

import React, { useState, useEffect } from "react";

export function ClickCounter(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    props.onCounterChange(count);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}

// test2

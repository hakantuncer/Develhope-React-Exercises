import React, { useState, useEffect } from "react";

import { CounterDisplay } from "/CounterDisplay";

export function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, props.interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.interval]);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + props.increment)}>
        Increment
      </button>
    </div>
  );
}

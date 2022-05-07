import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>click me</button>
      <p>u clicked {count} times</p>
    </div>
  );
};

export default Counter;

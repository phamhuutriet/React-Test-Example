import React, { useState } from "react";

function IncreaseButton() {
  const [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button data-testid="button" onClick={incrementByOne}>
        Increment
      </button>
      <h2 data-testid="counter">Counter: {count}</h2>
    </div>
  );
}

export default IncreaseButton;

import React from "react";

function Counter(props) {
  return (
    <div>
      <button onClick={props.onClickIncrement} data-testid="increment">
        Increment
      </button>
      <button onClick={props.onClickDecrement} data-testid="decrement">
        Decrement
      </button>
      <button onClick={props.onClickIncrementAsync} data-testid="incrementAsync">
        Increment Async
      </button>
      <h3 data-testid="showCounter">Clicked {props.clickCount} times</h3>
    </div>
  );
}

export default Counter;

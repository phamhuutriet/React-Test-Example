import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";

function CounterController() {
  const clickCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickIncrement = () => dispatch({ type: "INCREMENT" });
  const onClickDecrement = () => dispatch({ type: "DECREMENT" });
  const onClickIncrementAsync = () => dispatch({ type: "INCREMENT_ASYNCHRONOUS" });

  return (
    <Counter
      clickCount={clickCount}
      onClickDecrement={onClickDecrement}
      onClickIncrement={onClickIncrement}
      onClickIncrementAsync={onClickIncrementAsync}
    />
  );
}

export default CounterController;

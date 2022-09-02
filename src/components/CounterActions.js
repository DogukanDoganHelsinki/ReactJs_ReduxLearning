import React from "react";
import { increment, decrement, incrementByAmount } from "../stores/counter";
import { useDispatch } from "react-redux";

function CounterActions({ count, setCount }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrease(-)</button>
      <button onClick={() => dispatch(increment())}>Increase(+)</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increase by 2(+)
      </button>
    </div>
  );
}

export default CounterActions;

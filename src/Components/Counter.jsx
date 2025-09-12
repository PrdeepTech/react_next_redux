"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../app/redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button className="border-2 px-4 py-4 grayscale" onClick={() => dispatch(increment())}>+1</button>
      <button className="border-2 px-4 py-4 grayscale" onClick={() => dispatch(decrement())}>-1</button>
      <button className="border-2 px-4 py-4 grayscale" onClick={() => dispatch(reset())}>Reset</button>
      <button className="border-2 px-4 py-4 grayscale" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

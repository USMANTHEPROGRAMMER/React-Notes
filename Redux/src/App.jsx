import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  custom,
} from "./Redux/Features/Counter/counterSlice";
import Cart from "./Components/Cart";

const App = () => {
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <>
      <Cart />  
      <div className="min-h-screen gap-5 bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Counter {counter}</h1>
        <div className="flex gap-5">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="border-2 border-black px-6 py-3 rounded-xl cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="border-2 border-black px-6 py-3 rounded-xl cursor-pointer"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(reset());
          }}
          className="border-2 border-black px-29 py-3 rounded-xl cursor-pointer"
        >
          Reset
        </button>
        <input
          type="number"
          className="border-2 border-black w-70 px-4 py-3 rounded-xl cursor-pointer"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(custom(input));
          }}
          className="border-2 border-black w-70 py-3 rounded-xl cursor-pointer"
        >
          Add {input}
        </button>
      </div>
    </>
  );
};

export default App;

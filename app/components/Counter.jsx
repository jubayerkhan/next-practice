"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold pb-3">Counter:{count}</h1>

      <button
        className="px-5 py-2 bg-blue-500 text-3xl rounded-2xl mr-5"
        onClick={() => setCount(count+1)}
      >
        +
      </button>
      <button
        className="px-5 py-2 bg-blue-500 text-3xl rounded-2xl"
        onClick={() => setCount(count-1)}
      >
        -
      </button>
    </>
  );
}

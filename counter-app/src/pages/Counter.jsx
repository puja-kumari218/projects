import React from 'react';
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Counter App</h1>
      <h2 className="text-6xl text-blue-600 mb-6">{count}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>

        <button
          onClick={() => setCount(10)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

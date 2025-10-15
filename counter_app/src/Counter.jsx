import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {     
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="counter">Counter: {count}</h1>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
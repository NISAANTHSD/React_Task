import React, { useState } from 'react';
import './App.css';
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
    <div className='card'>
      <h1 className="counter">Counter<pre>{count}</pre></h1>
      <button className='btn' onClick={increment}>➕</button>
      <button className='btn' onClick={decrement}>➖</button>
      <button className='btn' onClick={reset}>🔄</button>
    </div>
  );
};

export default Counter;
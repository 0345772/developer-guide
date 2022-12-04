import { useState } from 'react';
import './counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count+1)
  return (
    <div className='counter'>
      <h2>{count}</h2>
      <button onClick={inc}> inc</button>
    </div>
  )
}
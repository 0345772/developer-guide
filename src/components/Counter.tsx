import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count+1)
  return (
    <div className={cls.counter}>
      <h2>{count}</h2>
      <button className={cls.btn} onClick={inc}> inc</button>
    </div>
  )
}
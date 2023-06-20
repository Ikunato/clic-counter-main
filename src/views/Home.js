import React from 'react';
import Counter from './Counter';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <Counter counter={counter} onIncrement={onIncrement} onDecrement={onDecrement}/>
  );
};

export default Home;

import React from 'react'

function Counter({
    onIncrement,
    onDecrement,
    counter,
  }) {
    return (
      <div>
          <p>Vous avez cliqué {counter} fois</p>
        <button onClick={() => onIncrement('INCREMENT')}>
            <p>Augmenter</p>
        </button>
        <button onClick={() => onDecrement('DECREMENT')}>
            <p>Diminuer</p>
        </button>
      </div>
    );
  };

export default Counter;
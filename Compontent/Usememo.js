import React, { useState, useMemo } from 'react';

function ExpensiveCalculation(num) {
  console.log('ExpensiveCalculation called');
  // Simulate a computationally expensive operation
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += i;
  }
  return result;
}

function MyMemo() {
  const [count, setCount] = useState(0);

  // Use `useMemo` to cache the result of the expensive calculation
  const calculatedValue = useMemo(() => ExpensiveCalculation(count), [count]);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Calculated Value: {calculatedValue}</p>
    </div>
  );
}

export default MyMemo;
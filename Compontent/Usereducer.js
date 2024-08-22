import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0,
  name: '',
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 2 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function MyReduce() {
  // Use the `useReducer` hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const updateName = (event) => {
    dispatch({ type: 'UPDATE_NAME', payload: event.target.value });
  };

  return (
    <div>
      Count: {state.count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input
        type="text"
        value={state.name}
        onChange={updateName}
      />
    </div>
  );
}

export default MyReduce;
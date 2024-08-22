import React, { useRef, useState } from 'react';

function MyRef() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleFocus}>Focus Input</button>
      <p>Input Value: {inputValue}</p>
    </div>
  );
}

export default MyRef;
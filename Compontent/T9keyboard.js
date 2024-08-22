import { useRef, useState } from "react";

const Key = ({ KEY, input, setInput, inputIndex, setInputIndex }) => {
  const [state, setState] = useState(0);
  const timerRef = useRef(null);
  const startRef = useRef();

  const mouseDown = (e) => {
    startRef.current = e.timeStamp;
  };

  const mouseUp = (e, key) => {
    clearTimeout(timerRef.current);
    if (key.content === undefined) {
      setInput((input) => input + key.name);
      setInputIndex((i) => i + 1);
      return;
    }
    setInput((input) => {
      let updatedValue = input.split("");
      if (e.timeStamp - startRef.current > 1000) {
        updatedValue[inputIndex] = key.name;
      } else {
        updatedValue[inputIndex] = key.content[state];
      }
      updatedValue = updatedValue.join("");
      return updatedValue;
    });
    setState((state) => {
      if (state + 1 === key.content.length) return 0;
      return state + 1;
    });
    timerRef.current = setTimeout(() => {
      setInputIndex((i) => i + 1);
      setState(0);
    }, 500);
  };

  return (
    <button
      onMouseUp={(e) => mouseUp(e, KEY)}
      onMouseDown={(e) => mouseDown(e)}
    >
      {KEY.name}
    </button>
  );
};

export default Key;

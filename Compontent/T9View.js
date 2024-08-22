import { useState } from "react";
// import "../styles.css";
import Key from "./T9keyboard";


export default function T9View() {
  const [input, setInput] = useState("");
  const [inputIndex, setInputIndex] = useState(0);
  const keys = [
    {
      name: 1,
      content: ["."]
    },
    {
      name: 2,
      content: ["a", "b", "c"]
    },
    {
      name: 3,
      content: ["d", "e", "f"]
    },
    {
      name: 4,
      content: ["g", "h", "i"]
    },
    {
      name: 5,
      content: ["j", "k", "l"]
    },
    {
      name: 6,
      content: ["m", "n", "o"]
    },
    {
      name: 7,
      content: ["p", "q", "r", "s"]
    },
    {
      name: 8,
      content: ["t", "u", "v", "w"]
    },
    {
      name: 9,
      content: ["x", "y", "z"]
    },
    {
      name: "*"
    },
    {
      name: 0,
      content: [" "]
    },
    {
      name: "#"
    }
  ];
  return (
    <div className="App">
      <input type="text" value={input} disabled />

      <div className="grid">
        {keys.map((key) => (
          <Key
            key={key.name}
            inputIndex={inputIndex}
            setInputIndex={setInputIndex}
            input={input}
            KEY={key}
            setInput={setInput}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useMemo } from "react";
import "./App.css";

import {
  switchWordsDefault,
  // switchWordsMini,
} from "./lib";

const App = () => {
  const [words, setWords] = useState("");

  // accept the input string, switch it by pairs, the switched
  // is the result, used for display
  const switched = useMemo(() => {
    return switchWordsDefault(words);
  }, [words]);

  const handleInput = (e) => {
    // we should debounce before setWords, in this example
    // just for simplification, I simply set on every keystroke
    // it is not efficient because the switchWords method will be called
    // on every added character.
    setWords(e.target.value);
  };

  return (
    <div className="App">
      <h1>Switch Words</h1>
      <p>
        <input
          type="text"
          className="demo"
          value={words}
          onChange={handleInput}
        />
        <button className="clear-btn" onClick={() => setWords("")}>
          Clear
        </button>
      </p>

      <h2>{switched}</h2>
    </div>
  );
};

export default App;

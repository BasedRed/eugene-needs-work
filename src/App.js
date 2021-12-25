import React, { useState } from "react";
//Import Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import other components
import Age from "./components/Age";
import Game from "./components/Game";
import Video from "./components/Video";

function App() {
  const [showNum, setShowNum] = useState(2);

  return (
    <div className="App">
      <GlobalStyle />
      {showNum === 1 ? <Age /> : null}
      {showNum === 2 ? <Game /> : null}
      {showNum === 3 ? <Video /> : null}

      <button
        onClick={() => {
          setShowNum(showNum - 1);
        }}
      >
        Backward
      </button>
      <button
        onClick={() => {
          setShowNum(showNum + 1);
        }}
      >
        Forward
      </button>
    </div>
  );
}

export default App;

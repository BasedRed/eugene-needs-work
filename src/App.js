import React, { useState } from "react";
//Import Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import other components
import Age from "./components/Age";
import Game from "./components/Game";
import Video from "./components/Video";
import Skills from "./components/Skills";

function App() {
  const [showNum, setShowNum] = useState(3);

  return (
    <div className="App">
      <GlobalStyle />
      {/* {showNum === 2 ? <Video /> : null} */}
      {showNum === 3 ? <Game setShowNum={setShowNum} /> : null}
      {showNum === 4 ? <Skills setShowNum={setShowNum} /> : null}
      {showNum === 5 ? <Age setShowNum={setShowNum} /> : null}

      {/* <button
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
      </button> */}
    </div>
  );
}

export default App;

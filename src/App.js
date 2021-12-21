import React, { useState } from "react";
//Import Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import other components
import Age from "./components/Age";
import Game from "./components/Game";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Age /> */}
      {/* <Game /> */}
      <Video />
    </div>
  );
}

export default App;

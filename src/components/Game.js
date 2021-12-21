import React, {useState} from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

const Game = () => {

const [coordY, setCoordY] = useState();

    return (
      <StyledGame>
        <h2>This is a minigame</h2>
        <div className="container">
          <motion.div
            drag="y"
            dragConstraints={{ top: 10, bottom: 300 }}
            dragMomentum={false}
            onDrag={(event, info) => {
              // console.log(info.point.x, info.point.y);
              // console.log(event);
              if (info.point.y >= 400) {
                setCoordY(300);
                return;
              }
              if (info.point.y <= 50) {
                setCoordY(5);
                return;
              }
              else {
              setCoordY(info.point.y-60);
              }
            }}
            className="block"
          ></motion.div>

          <motion.div
            animate={{ y: coordY }}
            transition={{ duration: 2, delay: 0.2 }}
            className="block-2"
          ></motion.div>
        </div>
      </StyledGame>
    );
}

const StyledGame = styled.div`
  color: white;

  .container {
    height: 90vh;
    width: 50vw;
    border: solid 1px white;
  }

  .block {
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .block-2 {
    background: grey;
    position: absolute;
    top: 35px;
    left: 200px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
`;

export default Game;
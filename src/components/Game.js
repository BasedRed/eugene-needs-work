import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import Lottie from "lottie-web";

const Game = () => {
  const [showCloud, setShowCloud] = useState(true);
  const container = useRef(null);
  const containerCloud = useRef(null);
  const [coordX, setCoordX] = useState();
  let windowWidth = window.innerWidth / 5; //Width of our screen in a variable

  //Here we create a function that will update our screen size each time it changes.
  React.useEffect(() => {
    function handleResize() {
     
      windowWidth = window.innerWidth / 5;
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/driver02.json"),
    });

    Lottie.loadAnimation({
      container: containerCloud.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/rain_cloud.json"),
    });

    return () => {
      Lottie.destroy();
    };
  }, []);


  

  const titleAnimation = {

    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delayChildren: 0.4,
        staggerChildren: 2,
      }
    }


  };

  return (
    <StyledGame>
      <div className="container-02">
        <div className="container-flex">
          <motion.div
            variants={titleAnimation}
            initial="initial"
            animate="animate"
            className="empty-flex"
          >
            <motion.h2 variants={titleAnimation}>Hey there!</motion.h2>
            <motion.h2 variants={titleAnimation}>
              This guy down below is Eugene.
            </motion.h2>
            <motion.h2 variants={titleAnimation}>
              Right now he works as a Wolt courier.
            </motion.h2>
            <motion.h2 variants={titleAnimation}>
              <br />
              <br />
              &larr; You can drag him &#8594;
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ duration: 3, delay: 2 }}
            className="container-draggable"
            drag="x"
            dragElastic={0.2}
            dragConstraints={{
              left: -windowWidth,
              right: windowWidth,
            }}
            onDrag={(event, info) => {
              setTimeout(setShowCloud(true), 500);

              setCoordX(info.point.x - window.innerWidth / 2.5);
            }}
          >
            <motion.div className="container" ref={container}></motion.div>
          </motion.div>
        </div>

        {showCloud && (
          <motion.div
            className="containerCloud"
            initial={{ x: -600 }}
            animate={{ x: coordX }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            <motion.div ref={containerCloud}></motion.div>
          </motion.div>
        )}
      </div>
      <div className="hide"></div>
    </StyledGame>
  );
};

const StyledGame = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container-02 {
    position: relative;
    height: 90vh;
    width: 50vw;
    border: solid 1px white;
    overflow: hidden;
  }

  .empty-flex {
    padding-top: 1rem;
  }

  .container-flex {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  h2{
    padding: 1rem 0rem;
  }
  .container-draggable {
    padding: 0;
    width: 25%;
  }

  .containerCloud {
    position: absolute;
    /* bottom: -75px; */
    bottom: -13%;
    width: 60%;
    pointer-events: none;
  }

  .container {
    transform: scaleX(-200%) scaleY(200%);

    pointer-events: none;
  }

  @media only screen and (max-width: 600px) {

.container-02 {
  width: 80vw;
}

    /* .containerCloud {
      
      bottom: -40px;
     
    } */
  }
`;

export default Game;

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-web";

const Game = ({ setShowNum }) => {
  const [showCloud, setShowCloud] = useState(true);
  const container = useRef(null);
  const containerCloud = useRef(null);
  const [coordX, setCoordX] = useState();
  //Lets create consts for our text
  const [currentText, setCurrentText] = useState(0);
  //Let's create a const for clicking once
  const [isClicked, setIsClicked] = useState(false);
  let windowWidth = window.innerWidth / 5; //Width of our screen in a variable

  //Let's create a function that will change our text when we try to get the courrier from the cloud
  const changeText = () => {
    if (!isClicked) {
      setTimeout(() => {
        // console.log("Changed text to #2");
        setCurrentText(currentText + 1);
      }, 3000);

      setTimeout(() => {
        // console.log("Changed text to #3");
        setCurrentText(currentText + 2);
      }, 10000);

      setIsClicked(true);
    }
  };

  //Here we create a function that will update our screen size each time it changes.
  React.useEffect(() => {
    function handleResize() {
      windowWidth = window.innerWidth / 5;
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    // console.log('Creating lottie');
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/driver03.json"),
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
      // console.log('Destroyed Lottie')
    };
  }, []);

  const titleAnimation = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delayChildren: 0.4,
        staggerChildren: 2,
      },
    },

    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const completelyChangePage = () => {
    setShowNum(4);
  };

  return (
    <StyledGame>
      <div className="container-02">
        <div className="container-flex">
          <motion.div
            variants={titleAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="empty-flex"
          >
            {/* Page #1 */}
            {currentText === 0 ? (
              <div>
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
              </div>
            ) : null}

            {/* Page #2 */}
            {currentText === 1 ? (
              <motion.div variants={titleAnimation}>
                <motion.h2 variants={titleAnimation}>Oh no!</motion.h2>
                <motion.h2 variants={titleAnimation}>
                  A rainy cloud! Move Eugene away!
                </motion.h2>
              </motion.div>
            ) : null}

            {/* Page #3 */}
            {currentText === 2 ? (
              <motion.div variants={titleAnimation}>
                <motion.h2 variants={titleAnimation}>
                  Seems like it doesn't help much..
                </motion.h2>
                <motion.h2 variants={titleAnimation}>
                  Maybe you can help Eugene find a new work?
                </motion.h2>
                <br />
                <motion.button
                  onClick={() => completelyChangePage()}
                  variants={titleAnimation}
                  className="final-button"
                >
                  Look at his frontend skills
                </motion.button>
              </motion.div>
            ) : null}
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
              changeText();
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
      <div>
        <button className="skip" onClick={() => completelyChangePage()}>
          Skip
        </button>
      </div>
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

  h2 {
    padding: 1rem 0rem;
  }
  .container-draggable {
    padding: 0;
    margin-bottom: 1%;
    width: 25%;
    cursor: pointer;
  }

  .containerCloud {
    position: absolute;
    /* bottom: -75px; */
    bottom: -13%;
    width: 60%;
    pointer-events: none;
  }

  .container {
    -webkit-transform: scaleX(-200%) scaleY(200%);
    transform: scaleX(-200%) scaleY(200%);

    pointer-events: none;
  }

  .final-button {
    padding: 1rem 2rem;
    cursor: pointer;
    background: none;
    color: white;
    transition: 0.3s;
    border: solid 3px white;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  .skip {
    font-size: 0.5rem;
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: none;
    color: white;
    transition: 0.3s;
    border: solid 1px white;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media only screen and (max-width: 600px) {
    .container-02 {
      width: 80vw;
      /* height: 85vh; */
    }

    .containerCloud {
      bottom: -5%;
    }
  }
`;

export default Game;

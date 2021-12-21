import React, { useState } from "react";
// Import styled 
import styled from "styled-components";
//Framer-motion
import { motion } from "framer-motion";


const Age = () => {
  // First i get all Date info and assign it to variables
  const birth = new Date("02/20/1997");
  //I use UseState with already created variable in it.
  const [age, setAge] = useState(
    ((new Date() - birth) / (1000 * 3600 * 24 * 365)).toFixed(8)
  );

  //Animations for h2 tags
  const titleAnim = {
    hidden: {y: '-100%'},
    show: {y: '0%', transition: { duration: 0.75, ease: `easeOut`, staggerChildren: 0.5, when: 'beforeChildren'}},
  }

  const titleAnim2 = {
    hidden: { opacity: 0.8 },
    show: {
      opacity: 1,
      transition: { delay: -1, duration: 0.3, ease: `easeInOut` },
    },
  };


  const buttonAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 2, duration: 3, ease: `easeInOut` },
    },
  };


  // Then I just start a function with set interval about 2 seconds
  //that will update age every 2 seconds or so.
  //I also convert it to string so that I can split it in HTML
  setInterval(() => {
    setAge(() => {
      let today = new Date();
      return ((today - birth) / (1000 * 3600 * 24 * 365)).toFixed(8).toString();
    });
  }, 2000);

  return (
    
      <StyledAge variants={titleAnim} initial="hidden" animate="show">
        <StyledHide>
          <motion.h2 variants={titleAnim}>Hello, this is Eugene.</motion.h2>
        </StyledHide>
        <StyledHide>
          <motion.h2 variants={titleAnim}>
            He is <span className="age-left"> {age.split(".")[0]}</span>
            <motion.span variants={titleAnim2} key={age} className="age-right">
              .{age.split(".")[1]}
            </motion.span>{" "}
            years old.
          </motion.h2>
        </StyledHide>
        <motion.button variants={buttonAnim} > ... Okay?</motion.button>
      </StyledAge>
    
  );
};

const StyledAge = styled(motion.div)`

font-size: 2rem;
font-weight: 700;
color: white;
min-height: 90vh;
padding: 2rem 3rem;
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center; */

.age-right{
  font-size: 1.8rem;
}

button {
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translateX(-50%) translateY(-50%);
  padding: 1rem 2rem;
  cursor: pointer;
  background: none;
  color: white;
  transition: 0.3s;
  border: solid 3px white;

  &:hover{
    background-color: white;
    color: black;
  }
}

`

const StyledHide = styled.div`
overflow: hidden;
`

export default Age;

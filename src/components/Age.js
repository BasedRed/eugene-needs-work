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
    hidden: { y: "-100%" },
    show: {
      y: "0%",
      transition: {
        duration: 0.75,
        ease: `easeOut`,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

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
      <div className="upper-title">
        <StyledHide>
          <motion.h2 variants={titleAnim}>
            This website was created by Eugene.
          </motion.h2>
        </StyledHide>
        <StyledHide>
          <motion.h2 variants={titleAnim}>
            Right now he is{" "}
            <span className="age-left"> {age.split(".")[0]}</span>
            <motion.span variants={titleAnim2} key={age} className="age-right">
              .{age.split(".")[1]}
            </motion.span>{" "}
            years old.
          </motion.h2>
        </StyledHide>
      </div>
      {/* <motion.button variants={buttonAnim}> ... Okay?</motion.button> */}
      <div className="info">
        <h4>ABOUT</h4>
        <p>
          Natural born developer with vast experience in motion design and
          graphics. Currently now working as Wolt courier and Data Analytics
          instructor at Yandex Practicum.
        </p>
        <br />
        <p>I've created this website to show off my frontend skills.</p>
        <p> I hope I've succeded.</p>
        <p>Now hire me before the counter above reaches 25 ooof</p>
      </div>
      <div className="buttons">
        <button>CV</button>
        <button>
          <a
            href="https://www.linkedin.com/in/grebenchukeugene/"
            target="_blank"
          >
            LinkedIn
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/jewish_goose/" target="_blank">
            Instagram
          </a>
        </button>
      </div>
    </StyledAge>
  );
};

const StyledAge = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  min-height: 90vh;
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
/* justify-content: center; */

.upper-title{

}

  .age-right {
    font-size: 1.8rem;
  }
  
h2, h4 {
  text-align: center;
}

h4, p{
  font-weight: lighter;
}
p{
  font-size: 1.2rem;
  text-align: center;
  }

.info{
  padding: 1rem 1.5rem;
  margin: 2rem 0rem;
  min-height: 40vh;
  width: 50vw;
  border: solid 1px white;
}

.buttons{
  width: 50vw;
  border: solid 1px white;
  /* padding: 0rem 2rem; */
display: flex;
justify-content: space-around;
align-items: center;
}

a{
  color: white;
}
  button {
    /* position: absolute; */
    /* left: 50vw; */
    /* top: 50vh; */
    /* transform: translateX(-50%) translateY(-50%); */
    flex: 1;
    padding: 1rem 0rem;
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

@media only screen and (max-width: 768px) {

font-size: 1.2rem;

.age-right{
  font-size: 1.2rem;
}

   .info, .buttons {
     width: 90%;
   }
}

`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default Age;

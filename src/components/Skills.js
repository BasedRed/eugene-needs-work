import React, { useState, useEffect } from "react";
import styled from "styled-components";
//Import images
import site_01 from "../img/site_01.jpg";
import site_02 from "../img/site_02.jpg";
import site_03 from "../img/site_03.jpg";
import site_04 from "../img/site_04.jpg";
//Import vimeo
import VimeoComponent from "./VimeoComponent";

const Skills = ({ setShowNum }) => {
  let width = window.innerWidth;
  const [isSwitched, setIsSwitched] = useState(true);
  const [windowWidth, setWindowWidth] = useState(width);
  const [onceClicked, setOnceClicked] = useState(false);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      // console.log(windowWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const changeTheme = () => {
    setIsSwitched(!isSwitched);
    setOnceClicked(true);
  };

  const changeThemeToTech = () => {
    if (!onceClicked) {
      setIsSwitched(true);
    } else {
      setIsSwitched(!isSwitched);
    }
    setOnceClicked(true);
  };

  const changeThemeToCreative = () => {
    setIsSwitched(!isSwitched);
    setOnceClicked(true);
  };

  const changePage = () => {
    setShowNum(5);
  };

  return (
    <StyledSkills>
      <h2 className="headline">S K I L L S</h2>
      {!onceClicked && <h3 className="optional-h3">(click one of them)</h3>}
      <div className="skill-table">
        <div
          onClick={() => changeThemeToTech()}
          className="left"
          style={{
            flex: isSwitched && onceClicked ? 15 : 1,
            // order: isSwitched ? 1 : 0, // **** THIS IS AN IMPORTANT LINE, MAYBE SHOULD BE ADDED
            backgroundColor: isSwitched ? "" : "white",
          }}
        >
          <div
            className="title-left"
            style={{
              flexDirection:
                !isSwitched && windowWidth > 600 ? "column" : "row",
            }}
          >
            <span
              className="span-left"
              style={{ color: isSwitched ? "white" : "#0c0b18" }}
            >
              T
            </span>
            <span
              className="span-left"
              style={{ color: isSwitched ? "white" : "#0c0b18" }}
            >
              E
            </span>
            <span
              className="span-left"
              style={{ color: isSwitched ? "white" : "#0c0b18" }}
            >
              C
            </span>
            <span
              className="span-left"
              style={{ color: isSwitched ? "white" : "#0c0b18" }}
            >
              H
            </span>
          </div>

          {isSwitched && onceClicked && (
            <div className="info-left">
              <h2>Languages:</h2>
              <p>JAVASCRIPT, HTML, CSS, Typescript, C#, Python, SQL</p>
              <h2>Frameworks:</h2>
              <p>React, Vanilla JS, Angular</p>
              <h2>Skills:</h2>
              <p>
                Redux, Axios, Sass, Styled Components, OOP, AJAX, Web API,
                Enitity Framework, ADO.Net, Git{" "}
              </p>
              <br />
              <button onClick={() => changePage()} className="button-to-age">
                Click here for my bio
              </button>

              <h2 className="project-title">Projects:</h2>
              <div className="projects">
                <div className="card">
                  <a
                    href="https://eugene-portfolio-123.netlify.app/"
                    target="_blank"
                  >
                    <div className="card-title"> Eugene's Photography </div>
                    <img src={site_01} alt="" />
                  </a>
                </div>
                <div className="card">
                  <a
                    href="https://basedred-music-player.netlify.app/"
                    target="_blank"
                  >
                    <div className="card-title"> React Music Player </div>
                    <img src={site_02} alt="" />
                  </a>
                </div>
                <div className="card">
                  <a
                    href="https://frosty-kirch-2d707b.netlify.app/"
                    target="_blank"
                  >
                    <div className="card-title"> Vanilla Calc </div>
                    <img src={site_03} alt="" />
                  </a>
                </div>
                <div className="card">
                  <a
                    href="https://determined-bose-420a95.netlify.app"
                    target="_blank"
                  >
                    <div className="card-title"> CSS Visual </div>
                    <img src={site_04} alt="" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => changeTheme()}
          className="right"
          style={{
            flex: isSwitched ? 1 : 15,

            backgroundColor: isSwitched ? "white" : "",
          }}
        >
          <div
            className="title-right"
            style={{
              flexDirection: isSwitched && windowWidth > 600 ? "column" : "row",
            }}
          >
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              C
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              R
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              E
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              A
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              T
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              I
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              V
            </span>
            <span
              className="span-right"
              style={{ color: isSwitched ? "#0c0b18" : "white" }}
            >
              E
            </span>
          </div>
          {!isSwitched && (
            <div className="group-right">
              <div className="info-right">
                <h2>Languages:</h2>
                <p>English, Hebrew, Russian, German</p>
                <h2>Software:</h2>
                <p>
                  Figma, Adobe After Effects, Photoshop, Illustrator, Lightroom
                </p>
                <p> Davinci Resolve, Autodesk Maya, Cinema 4D</p>
                <h2>Skills:</h2>
                <p>
                  Motion Graphic Design, Animation, Design, Color Grading,
                  Photography, 3D animation
                </p>
                <p>Film directing, screenwriting, stop motion</p>
                <br />
                <button onClick={() => changePage()} className="button-to-age">
                  Click here for my bio
                </button>

                <h2 className="project-title">Projects:</h2>
                <a
                  className="vimeo-link"
                  target="_blank"
                  href="https://vimeo.com/user27173168"
                >
                  vimeo
                </a>
                <p>
                  Also I've made this video{" "}
                  {windowWidth > 600 ? "on the right →" : "down below 🠓"}
                </p>
              </div>
              <div className="vimeo-container">
                <VimeoComponent />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <button>CHANGE</button> */}
    </StyledSkills>
  );
};

export default Skills;

// *********** NOW STYLES **************

const StyledSkills = styled.div`
  .optional-h3 {
    color: white;
    font-weight: 200;
  }

  .title-left {
    display: flex;
    /* flex: 0.1; */
    /* align-items: center; */
    justify-content: center;
  }

  .title-right {
    display: flex;
    justify-content: center;
  }

  .info-left {
    flex: 10;
    /* display: flex;
    flex-direction: column; */
  }

  span {
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    transition: 1s;
    text-align: center;
    cursor: pointer;
  }

  .span-right {
    color: #0c0b18;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  .headline {
    color: white;
    padding: 1rem 0rem;
  }
  .skill-table {
    width: 90vw;
    height: 80vh;
    border: solid 1px white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* flex-basis: auto; */
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    transition: 1s;
    border: solid 1px white;
    overflow: hidden;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    transition: 1s;
    border: solid 1px white;
    overflow: hidden;
  }

  .group-right {
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .vimeo-container {
    /* background-color: blue; */
    /* height: 50%; */
    width: 25%;
    /* margin-right: 1rem; */
    padding-bottom: 2.5rem;
  }

  p {
    color: white;
  }

  h2 {
    color: white;
  }

  .projects {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
  }

  .card {
    /* margin: 1rem 1rem; */
    /* padding-top: 1rem; */
    position: relative;
    /* width: 18vw; */
    /* height: 10vw; */
    /* background-color: white; */
    overflow: hidden;
    /* border-radius: 8px; */
    margin-right: 2rem;

    &:hover {
      opacity: 0.6;
      transition: 0.5s;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .card-title {
    /* padding-top: 1vh; */
    color: white;
    opacity: 0.8;
    position: absolute;
    height: 25%;
    width: 100%;
    background-color: black;
    bottom: -7%;
    text-align: center;
  }

  .vimeo-link {
    color: white;
    font-size: 1.4rem;
  }

  .button-to-age {
    padding: 0.75rem 2rem;
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

  .project-title {
    padding-top: 1rem;
  }

  @media only screen and (max-width: 600px) {
    height: 100%;

    .group-right {
      height: 100%;
      flex-direction: column;
    }

    .vimeo-container {
      width: 100%;
      padding-bottom: 0;
    }

    .projects {
      flex-direction: column;
    }

    .skill-table {
      flex-direction: column;
      height: 100%;
    }

    .left {
      order: 1;
      width: 100%;
    }

    .right {
      width: 100%;
    }

    .card {
      margin-right: 0;
      margin-bottom: 2rem;
    }

    .button-to-age {
    }
  }
`;

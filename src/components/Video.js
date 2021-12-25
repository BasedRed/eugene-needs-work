import React, { useState } from "react";
import styled from "styled-components";
import video1 from "../vid/courier_vid.mp4";
import image01 from "../img/01.jpg";
import image02 from "../img/02.jpg";
import image03 from "../img/03.jpg";
import image04 from "../img/04.jpg";
import image05 from "../img/05.jpg";
import image06 from "../img/06.jpg";
import image07 from "../img/07.jpg";

const Video = () => {
  const [clickable, setClickable] = useState(true);
  const [j, setJ] = useState(1);
  const [i, setI] = useState(0);
  const [images, setImages] = useState([
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
  ]);
  // const [currentImage, setCurrentImage] = useState(images[i]);

  const counter = () => {
    if (i !== 6) {
      // console.log(i);
      setI(i + 1);
    }

    if (i === 6) {
      setI(0);
      setJ(j + 1);
      console.log(j);
    }
  };

  const imageHandler = () => {
    if (j === 3) {
      setClickable(!clickable);
    }

    counter();
  };

  return (
    <div className="video">
      {/* <h2>Video</h2>
      <p>Here you can see a majestic work of art</p> */}
      {/* <StyledVid>
      <video controls>
        <source src={video1} type="video/mp4" />
      </video>
    </StyledVid> */}
      <img
        onClick={clickable ? () => imageHandler() : null}
        src={images[i]}
        style={{ height: "90vh" }}
        alt=""
      />
    </div>
  );
};

const StyledVid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    max-height: 90vh;
  }
`;

export default Video;

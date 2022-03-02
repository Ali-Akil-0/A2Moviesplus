import React from "react";
import styled from "styled-components";
import Viewer1 from "../images/viewers-disney.png";
import Viewer2 from "../images/viewers-marvel.png";
import Viewer3 from "../images/viewers-national.png";
import Viewer4 from "../images/viewers-pixar.png";
import Viewer5 from "../images/viewers-starwars.png";
import Video1 from "../videos/1564674844-disney.mp4";
import Video2 from "../videos/1564676115-marvel.mp4";
import Video3 from "../videos/1564676296-national-geographic.mp4";
import Video4 from "../videos/1564676714-pixar.mp4";
import Video5 from "../videos/1608229455-star-wars.mp4";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={Viewer1} alt="Viwer" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={Video1} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Viewer2} alt="Viwer" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={Video2} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Viewer3} alt="Viwer" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={Video3} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Viewer4} alt="Viwer" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={Video4} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={Viewer5} alt="Viwer" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={Video5} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 760px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 110%;
    height: 110%;
    // position: absolute;
    // top: 0px;
    opacity: 0;
    z-index: 0;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

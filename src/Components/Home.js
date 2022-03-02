import React from "react";
import styled from "styled-components";
import background from "../images/home-background.png";
import Header from "./Header";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
    </Container>
  );
};

export default Home;
// A good default setup for background images
const Container = styled.div`
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  background-image: url(${background});
  display block;
  padding-top:10vh;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  padding-left:20px ;
  padding-right:20px ;

`;

import React from "react";
import styled from "styled-components";
import testImage from "../images/movie-icon.svg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Details = () => {
  return (
    <div>
      <Container>
        <Background>
          <img
            alt="poster"
            src="https://i.pinimg.com/originals/41/2f/96/412f96d1d0a926436fc4cc2c755fac18.jpg"
          />
        </Background>
        <ImageTitle>
          <img alt="imageTitle" src={testImage} />
        </ImageTitle>
        <Content>
          <Controls>
            <Player>
              <PlayArrowIcon />
            </Player>
          </Controls>
        </Content>
      </Container>
    </div>
  );
};

export default Details;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 canc(3.5vw, 5px);
`;
const ImageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 760px) {
    width: initial;
  }
`;
const Content = styled.div`
  max-width: 870px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flox: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.div``;

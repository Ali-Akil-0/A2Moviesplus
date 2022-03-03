import React from "react";
import styled from "styled-components";
import testImage from "../images/movie-icon.svg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import { IconButton } from "@mui/material";
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
        <ContainerLeft>
          <Content>
            <Controls>
              <Player>
                <PlayArrowIcon />
                <h3>Play</h3>
              </Player>
              <Trailer>
                <PlayArrowIcon />
                <h3>Trailer</h3>
              </Trailer>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <GroupIcon />
              </IconButton>
            </Controls>
            <Subtitle>Finding Nemo</Subtitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Description>
          </Content>
        </ContainerLeft>
      </Container>
    </div>
  );
};

export default Details;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    p {
      display: none;
    }
  }
`;
const ContainerLeft = styled.div``;
const Subtitle = styled.p``;
const Description = styled.p``;

const ImageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const Background = styled.div`
  padding-top: 70px;
  overflow: hidden;
  img {
    max-width: 370px;
  }
  @media (max-width: 760px) {
    margin-bottom: -95px;
  }
`;
const Content = styled.div`
  max-width: 870px;
  @media (min-width: 760px) {
    margin-left: 30px;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flox: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
  margin-bottom: 20px;
  opacity: 0.9;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  h3 {
    padding-left: 10px;
  }
  & > .MuiSvgIcon-root {
    font-size: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
    & > .MuiSvgIcon-root {
      fill: black !important;
    }
    & > h3 {
      color: black;
    }
  }
  @media (max-width: 760px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 11px;
    margin: 0px 10px 0px 0px;
    & > .MuiSvgIcon-root {
      font-size: 20px;
    }
  }
`;
const Trailer = styled(Player)`
  background-color: white;
  h3 {
    color: black;
  }
  & > .MuiSvgIcon-root {
    fill: black;
  }
  &:hover {
    background-color: black;
    h3 {
      color: white;
    }
    & > .MuiSvgIcon-root {
      fill: white;
      color: white;
    }
  }
`;

import React from "react";
import styled from "styled-components";
// import Image1 from "../images/";
// import Image2 from "../images/";
// import Image3 from "../images/";
// import Image4 from "../images/";

const NewDisney = () => {
  return (
    <Container>
      <h4>New Disney+</h4>
      <Content>
        <Wrap>
          <img
            src="https://i.pinimg.com/originals/41/2f/96/412f96d1d0a926436fc4cc2c755fac18.jpg"
            alt="MovieImage"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.pinimg.com/originals/41/2f/96/412f96d1d0a926436fc4cc2c755fac18.jpg"
            alt="MovieImage"
          />
        </Wrap>{" "}
        <Wrap>
          <img
            src="https://i.pinimg.com/originals/41/2f/96/412f96d1d0a926436fc4cc2c755fac18.jpg"
            alt="MovieImage"
          />
        </Wrap>{" "}
        <Wrap>
          <img
            src="https://i.pinimg.com/originals/41/2f/96/412f96d1d0a926436fc4cc2c755fac18.jpg"
            alt="MovieImage"
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default NewDisney;
const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  margin-top: 15px;
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
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
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

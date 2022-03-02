import React from "react";
import styled from "styled-components";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useNavigate } from "react-router-dom";
// import Image1 from "../images/";
// import Image2 from "../images/";
// import Image3 from "../images/";
// import Image4 from "../images/";

const Recommends = () => {
  const navigate = useNavigate();
  const MoveToDetails = () => {
    navigate("/details", { replace: true });
  };
  return (
    <Container onClick={MoveToDetails}>
      <Originals />
      <Trending />
      <NewDisney />
    </Container>
  );
};

export default Recommends;
const Container = styled.div`
  padding: 0 0 26px;
`;

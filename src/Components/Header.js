import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Header = () => {
  return (
    <Container>
      <Logo alt="logo" src={logo} />
      <HeaderMiddle>
        <HeaderItem>
          <HomeIcon />
          <HeaderText> </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <SearchIcon />
          <HeaderText> </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <AddIcon />
          <HeaderText> </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <StarIcon />
          <HeaderText> </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <MovieFilterIcon />
          <HeaderText> </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <LiveTvIcon />
          <HeaderText> </HeaderText>
        </HeaderItem>
      </HeaderMiddle>
      <BContainer>
        <LoginButton>menu</LoginButton>
      </BContainer>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-height: 100px;
  padding: 15px;
`;
const Logo = styled.img`
  object-fit: contain;
  max-height: 50px;
`;
const BContainer = styled.div`
  background-color: black;
  border: 1px solid white;
  padding: 10px;
  border-radius: 4px;
`;
const LoginButton = styled.a`
  letter-spacing: 1px;
  font-size: 14px;
  font-family: serif;
`;
const HeaderMiddle = styled.div``;
const HeaderItem = styled.div``;
const HeaderText = styled.p``;

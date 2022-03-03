import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUseremail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { Avatar } from "@mui/material";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const email = useSelector(selectUseremail);
  const photo = useSelector(selectUserPhoto);
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const GoogleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log("The token is : ");
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          console.log("The user is : ");
          console.log(user);
          setUser(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } else if (username) {
      signOut(auth)
        .then(() => {
          console.log("Signed out succesfully");
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      dispatch(setSignOutState());
    }
  };
  useEffect(() => {
    if (username) {
      navigate("/home", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [username]);
  console.log("The photo url here");
  console.log(photo);
  console.log("The name");
  console.log(username);
  console.log("The email");
  console.log(email);
  console.log(photo);
  const ReturnHome = () => {
    navigate("/home");
  };

  return (
    <Container>
      <Logo onClick={ReturnHome} alt="logo" src={logo} />
      <HeaderMiddle>
        <HeaderItem>
          <HomeIcon />
          <HeaderText>Home</HeaderText>
        </HeaderItem>
        <HeaderItem>
          <SearchIcon />
          <HeaderText> Search</HeaderText>
        </HeaderItem>
        <HeaderItem>
          <AddIcon />
          <HeaderText> Watchlist </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <StarIcon />
          <HeaderText>Originals </HeaderText>
        </HeaderItem>
        <HeaderItem>
          <MovieFilterIcon />
          <HeaderText> Movies</HeaderText>
        </HeaderItem>
        <HeaderItem>
          <LiveTvIcon />
          <HeaderText> Series</HeaderText>
        </HeaderItem>
      </HeaderMiddle>
      {!username ? (
        <>
          <BContainer onClick={GoogleAuth}>
            <LoginButton>Login</LoginButton>
          </BContainer>
        </>
      ) : (
        <>
          <SignOut onClick={GoogleAuth}>
            <Avatar alt="UserAvatar" src={photo} />
            <DropDown>
              <span>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
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
  background-image: linear-gradient(black, transparent);
`;
const Logo = styled.img`
  object-fit: contain;
  max-height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
const BContainer = styled.div`
  background-color: black;
  border: 0.1px solid gray;
  padding: 10px;
  border-radius: 4px;
  opacity: 0.6;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    cursor: pointer;
  }
`;
const LoginButton = styled.a`
  letter-spacing: 2px;
  font-size: 14px;
  font-family: serif;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  padding-top: 11px;
  padding-bottom: 11px;

  &:hover {
    color: black;
  }
`;
const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.5;
  @media (max-width: 752px) {
    display: none;
  }
`;
const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderText = styled.p`
  padding-left: 5px;
  padding-right: 10px;
  text-transform: uppercase;
  font-size: 12px;
`;

const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: 3px;
  background: rgb (19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0/ 50%) 0px 0px 18px 0px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  ${DropDown} {
    display: none;
  }
  &:hover {
    ${DropDown} {
      transition-duration: 1s;
      display: flex;
    }
  }
`;

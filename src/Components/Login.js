import React from "react";
import "./Login.css";
import styled from "styled-components";
import BackgroundImage from "../images/login-background.jpg";
import Logo1 from "../images/cta-logo-one.svg";
import Logo2 from "../images/cta-logo-two.png";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={Logo1} alt="logo" />
          <SignUpD>
            <SignUp>Get all there</SignUp>
          </SignUpD>
          <Description>
            <DText>
              Get Premium Access to Raya and the Last Dragon with a Disney+
              Subscription. As of 10/1/2022, and The Disney Bundle will increase
              by $1
            </DText>
          </Description>
          <CTALogoTwo src={Logo2} alt="logo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
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
  background-image: url(${BackgroundImage});
`;
const CTA = styled.div`
  max-width: 680px;
  max-height: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  margin-bottom: 20vw;
`;
const CTALogoOne = styled.img`
  max-width: 450px;
  display: block;
  width: 100%;
`;
const CTALogoTwo = styled.img`
  max-width: 450px;
  display: block;
  width: 100%;
`;
const SignUpD = styled.div`
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background-color: #0483ee;
  }
`;

const SignUp = styled.a`
  letter-spacing: 1.5px;
  font-size: 18px;
  font-weight: 600;
`;
const Description = styled.div``;
const DText = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 10px;
  line-height: 1.3;
  letter-spacing: 1px;
`;

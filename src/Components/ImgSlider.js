import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../images/slider-badag.jpg";
import Slider2 from "../images/slider-badging.jpg";
import Slider3 from "../images/slider-scale.jpg";
import Slider4 from "../images/slider-badging.jpg";
import Slider5 from "../images/slider-scales.jpg";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        <Wrap>
          <ImageSlider alt="Slider" src={Slider1} />
        </Wrap>
        <Wrap>
          <ImageSlider alt="Slider" src={Slider2} />
        </Wrap>
        <Wrap>
          <ImageSlider alt="Slider" src={Slider3} />
        </Wrap>
        <Wrap>
          <ImageSlider alt="Slider" src={Slider4} />
        </Wrap>
        <Wrap>
          <ImageSlider alt="Slider" src={Slider5} />
        </Wrap>
      </Carousel>
    </Container>
  );
};

export default ImgSlider;
const Container = styled.div``;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  & > ImageSlider {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    padding: 0;
    border: 2px solid rgba(249, 249, 249, 0.8);
  }
`;
const ImageSlider = styled.img``;

const Carousel = styled(Slider)`
  padding-top: 40px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  &:hover {
    & > button {
      opacity: 1;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: revert;
  }
  .slick-prev {
    left: -75px;
  }
`;

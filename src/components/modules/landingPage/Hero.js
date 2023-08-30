import React from "react";
import Slider from "react-slick";
import { Next, Prev } from "../../layouts/PrevNext";
import Container from "../../layouts/common/Container";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  const imgStyle = {
    width: " 50rem",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <Container>
      <div className="mx-24">
        <Slider {...settings}>
          <div>
            <img style={imgStyle} src="./assets/img1.png" alt="style" />
          </div>
          <div>
            <img style={imgStyle} src="./assets/img2.png" alt="style" />
          </div>
          <div>
            <img style={imgStyle} src="./assets/img3.png" alt="style" />
          </div>
          <div>
            <img style={imgStyle} src="./assets/img4.png" alt="style" />
          </div>
          <div>
            <img style={imgStyle} src="./assets/img5.png" alt="style" />
          </div>
        </Slider>
      </div>

      <div>
        <p className=" text-center mt-10">
          LOREOVJDVAADSFIUUGFJEFDSGYDSSBVIDFYTGDFIYDIUHSHAHKJHCDYTSGJWDIOQIUGDWQSABCSAYWHDYUAFDWQKDLPOWQ9UFVGSDXCSJHAFDWAGDWQKDOHE
        </p>
      </div>
    </Container>
  );
};

export default Hero;

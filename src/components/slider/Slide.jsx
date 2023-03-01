import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slide.css";
import CarouselImage from "./CarouselImage";
import Image1 from "../../images/slider/1.jpg";
import Image2 from "../../images/slider/2.jpg";
import Image3 from "../../images/slider/3.jpg";

const images = [Image1, Image2, Image3];

function Slide() {
  var settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    autoplay: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "white",
  //         width: "2rem",
  //         height: "2rem",
  //         padding: "0.5rem",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <CarouselImage src={image} key={index} />
      ))}
    </Slider>
  );
}

export default Slide;

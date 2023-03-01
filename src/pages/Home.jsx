import React from "react";
import "./home.css";
// import Carousel from "react-bootstrap/Carousel";
// import slImage1 from "./../images/slider/slide1.jpg";
// import slImage2 from "./../images/slider/slide2.jpg";
// import slImage3 from "./../images/slider/slide3.jpg";
import Slide from "../components/slider/Slide";
// import FlashDeals from "../components/FlashDeals";

function Home() {
  return (
    <>
      {/* <div className="main"> */}
      <div className="slider">
        <Slide />
        {/* <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={slImage1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slImage2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slImage3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
      </div>
      {/* <div className="banner"></div> */}
      {/* </div> */}
      {/* <div className="banner-pmnt"></div> */}

      {/* <div className="flash-deals"> */}
      {/* //  <FlashDeals /> */}
      {/* </div> */}
    </>
  );
}

export default Home;

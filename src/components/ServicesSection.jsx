import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick"; // Import the react-slick component

import first from "./images/5 (1).webp";
import second from "./images/6 (1).webp";
import third from "./images/7 (1).webp";
import fourth from "./images/8 (1).webp";
import fifth from "./images/9 (1).webp";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "400px", // Set height to ensure all images are the same size
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover img": {
    transform: "scale(1.05)", // Zoom effect on hover
  },
  "& .text-overlay": {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    // transform: "translateX(-50%)", // Center the text horizontally
    padding: theme.spacing(2),
    color: "#fff",
    textAlign: "left",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background for better readability
    // borderRadius: "8px", // Rounded corners
    width: "100%",
    padding: theme.spacing(2),
    color: "#fff",
    textAlign: "left",
    transition: "background 0.3s ease-in-out",
  },
}));

// Styled component for the button (border removed)
const ExploreButton = styled("a")(({ theme }) => ({
  display: "inline-block",
  padding: "8px 16px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  backgroundColor: "transparent", // Remove border and background
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&::after": {
    content: "'→'", // Right arrow
    position: "absolute",
    right: "-20px",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover": {
    transform: "translateX(10px)", // Move the button slightly on hover
  },
  "&:hover::after": {
    right: "10px", // Show the arrow on hover
    opacity: "1",
  },
}));

const ServicesSection = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960, // Adjust to 1 image for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="services">
      <Typography variant="h3" className="text-left" gutterBottom style={{
        fontSize: '18px',
        color: '#0bb4aa',
      }}>
        LET’S WORK TOGETHER!
      </Typography>
      <Typography variant="h2" gutterBottom style={{ color: "black", fontSize: "28px", fontWeight: "600" }}>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Rare Interior Group, where luxury and innovation converge.
        Specializing in creating exquisite interior spaces and captivating
        visual merchandising displays, we are dedicated to bringing your vision
        to life with unmatched quality. Operating across the GCC, we also serve
        a diverse clientele in Hong Kong, Saudi Arabia, and India, delivering
        excellence in every project. Discover how our expertise and global reach
        can transform your space into an extraordinary experience.
      </Typography>

      {/* Slick Slider */}
      <Slider {...settings}>
        <div>
          <ImageContainer>
            <img src={first} alt="Web Design" />
            <div className="text-overlay">
              <Typography variant="h5" gutterBottom>
                Interior & Fit-out
              </Typography>
              <ExploreButton className="explore-further">Explore Further</ExploreButton>
            </div>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer>
            <img src={second} alt="Customized Furniture" />
            <div className="text-overlay">
              <Typography variant="h5" gutterBottom>
                Customized Furniture
              </Typography>
              <ExploreButton className="explore-further">Explore Further</ExploreButton>
            </div>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer>
            <img src={third} alt="Exhibition" />
            <div className="text-overlay">
              <Typography variant="h5" gutterBottom>
                Exhibition
              </Typography>
              <ExploreButton className="explore-further">Explore Further</ExploreButton>
            </div>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer>
            <img src={fifth} alt="Photography" />
            <div className="text-overlay">
              <Typography variant="h5" gutterBottom>
                Put the content in the same manner.{" "}
              </Typography>
              <ExploreButton className="explore-further">Explore Further</ExploreButton>
            </div>
          </ImageContainer>
        </div>
        <div>
          <ImageContainer>
            <img src={fourth} alt="Video Production" />
            <div className="text-overlay">
              <Typography variant="h5" gutterBottom>
                Packaging{" "}
              </Typography>
              <ExploreButton className="explore-further">Explore Further</ExploreButton>
            </div>
          </ImageContainer>
        </div>
      </Slider>
    </section>
  );
};

export default ServicesSection;

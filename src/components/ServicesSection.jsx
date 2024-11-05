import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import first from "./images/5 (1).webp";
import second from "./images/eee.jpg";
import third from "./images/7 (1).webp";
import fourth from "./images/ee.jpg";
import fifth from "./images/9 (1).webp";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "400px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
  "& .text-overlay": {
    position: "absolute",
    bottom: "-100%", // Start hidden below the image
    left: "0",
    width: "100%",
    padding: theme.spacing(2),
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
    textAlign: "left",
    transition: "bottom 0.3s ease-in-out", // Animate from bottom to top
  },
  "&:hover .text-overlay": {
    bottom: "0", // Slide up to fully show the overlay on hover
  },
}));

// The button styling remains the same as before
const ExploreButton = styled("a")(({ theme }) => ({
  display: "inline-block",
  padding: "8px 16px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  backgroundColor: "transparent",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&::after": {
    content: "'→'",
    position: "absolute",
    right: "-20px",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover": {
    transform: "translateX(10px)",
  },
  "&:hover::after": {
    right: "10px",
    opacity: "1",
  },
}));



const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once when the section is first in view
    threshold: 0.1, // Fires when 10% of the section is in view
  });

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="services" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          className="text-left"
          gutterBottom
          style={{
            fontSize: "18px",
            color: "#0bb4aa",
          }}
        >
          LET’S WORK TOGETHER!
        </Typography>
        <Typography variant="h2" gutterBottom style={{ color: "black", fontSize: "28px", fontWeight: "600" }}>
          Our expertise
        </Typography>
        <Typography variant="body1" paragraph>
        
        </Typography>

        <Slider {...settings}>
          {[first, second, third, fourth, fifth].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ImageContainer>
                <img src={image} alt={`Slide ${index + 1}`} />
                <div className="text-overlay">
                  <Typography variant="h5" gutterBottom>
                    {["Retail Solutions", "Interior & Fit-out", "Customized Furniture", "Packaging", "Exhibition Stands"][index]}
                  </Typography>
                  <ExploreButton className="explore-further">Explore Further</ExploreButton>
                </div>
              </ImageContainer>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default ServicesSection;

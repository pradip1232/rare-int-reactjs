import React from "react";
import { Grid, Typography, styled } from "@mui/material";

import first from "./images/10 (1).webp";
import second from "./images/11 (1).webp";
import third from "./images/12 (1).webp";

// Styled component for the image container
const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "400px", // Set a fixed height for the images
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out", // Smooth hover effect
  "&:hover": {
    transform: "scale(1.05)", // Scale up on hover
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "& .text-overlay": {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)", // Center the text horizontally
    padding: theme.spacing(2),
    color: "#fff",
    textAlign: "left",
    // backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background for better readability
    borderRadius: "8px", // Rounded corners
    width: "80%",
  },
  "&:hover .text-overlay": {
    textAlign:'center',
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background on hover
  },
}));

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <Typography
        variant="h2"
        gutterBottom
        style={{ color: "black", textAlign: "center", marginBottom: "2rem" }}
      >
        Our Portfolio
      </Typography>
      <Typography
        variant="body1"
        paragraph
        style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
      >
        Over the years, we’ve had the privilege of working with some of the most
        prestigious brands across the globe. From creating bespoke retail
        environments to designing luxurious living spaces, our work speaks for
        itself.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <ImageContainer>
            <img src={first} alt="Portfolio Image 1" />
            <div className="text-overlay">
              <Typography variant="h6">Consultation</Typography>
              <Typography variant="body2">
                Understanding your needs and vision.
              </Typography>
            </div>
          </ImageContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageContainer>
            <img src={second} alt="Portfolio Image 2" />
            <div className="text-overlay">
              <Typography variant="h6">Design</Typography>
              <Typography variant="body2">
                Crafting tailored solutions.
              </Typography>
            </div>
          </ImageContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageContainer>
            <img src={third} alt="Portfolio Image 3" />
            <div className="text-overlay">
              <Typography variant="h6">Execution</Typography>
              <Typography variant="body2">
                Bringing the designs to life with precision and care.
              </Typography>
            </div>
          </ImageContainer>
        </Grid>
      </Grid>
    </section>
  );
};

export default PortfolioSection;

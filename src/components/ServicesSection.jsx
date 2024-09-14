import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
  textAlign: "center",
  padding: theme.spacing(2),
}));

const ServicesSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <section className="services">
      <Typography variant="h3" gutterBottom>
        LET’S WORK TOGETHER!
      </Typography>
      <Typography variant="h2" gutterBottom>
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

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Web Design
              </Typography>
              <Typography variant="body2">
                We provide modern web design services.
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Photography
              </Typography>
              <Typography variant="body2">
                Capture moments with our photography services.
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Video Production
              </Typography>
              <Typography variant="body2">
                Professional video production for all needs.
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>
    </section>
  );
};

export default ServicesSection;

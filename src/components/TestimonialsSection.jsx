import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  styled,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

// Styled card for hover effect
const StyledCard = styled(motion(Card))({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  },
});

const testimonials = [
  {
    text: `"This is the best service I've ever experienced! Highly recommended."`,
    name: "John Doe",
  },
  {
    text: `"Fantastic experience. Will definitely use this service again."`,
    name: "Jane Smith",
  },
  {
    text: `"Highly professional and reliable. Five stars! Highly recommended."`,
    name: "Alice Johnson",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials py-5">
      <Container>
        <Typography variant="h2" align="center" gutterBottom style={{color:'black'}}>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                elevation={3}
              >
                <CardContent>
                  <Typography variant="body1" component="p">
                    {testimonial.text}
                  </Typography>
                  <Typography variant="h5" component="h5" sx={{ mt: 2 }}>
                    {testimonial.name}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

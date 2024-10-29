import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  styled,
} from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    text: `"Rare Interiors transformed our store into a visual masterpiece. Their attention to detail and creativity exceeded our expectations!"`,
    name: "- Meena Jewellers, Dubai",
  },
  {
    text: `"Rare Interiors transformed our store into a visual masterpiece. Their attention to detail and creativity exceeded our expectations!"`,
    name: "- Meena Jewellers, Dubai",
  },
  {
    text: `"Rare Interiors transformed our store into a visual masterpiece. Their attention to detail and creativity exceeded our expectations!"`,
    name: "- Meena Jewellers, Dubai",
  },
  {
    text: `"Rare Interiors transformed our store into a visual masterpiece. Their attention to detail and creativity exceeded our expectations!"`,
    name: "- Meena Jewellers, Dubai",
  },
  // {
  //   text: `"Fantastic experience. Will definitely use this service again."`,
  //   name: "- Jane Smith",
  // },
  // {
  //   text: `"Highly professional and reliable. Five stars! Highly recommended."`,
  //   name: "- Alice Johnson",
  // },
  // {
  //   text: `"A game changer for our business!"`,
  //   name: "- Alex Corp.",
  // },
  // {
  //   text: `"Exceeded our expectations in every way!"`,
  //   name: "- Global Designs",
  // },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Slide one card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 card at smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials py-5">
      <Container>
        <Typography variant="h2" align="center" gutterBottom style={{ color: 'black' }}>
          What Our Clients Say
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
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
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

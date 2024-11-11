import React, { useEffect, useState } from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import about1 from './images/about us img.png';
import about2 from './images/our service rare interior.png';

import aa from './images/ss/12 (1).webp';
import a from './images/ss/13 (2).webp';
// import bb from './images/ss/10 (1).webp';
import cc from './images/ss/9 (1).webp';
import dd from './images/ss/8 (1).webp';
import ee from './images/ss/7 (1).webp';

const imageArray = [aa, a, cc, dd, ee];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Styled component for the container with background image in the top-right corner
const BackgroundWrapper = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  "&::before": {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '200px', // Adjust width as needed
    height: '200px', // Adjust height as needed
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/04/30/10/56/cityscape-7959264_960_720.jpg")',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.3, // Adjust opacity for subtle effect
    zIndex: -1,
  }
});

const AnimatedImage = ({ src, alt, ...props }) => (
  <motion.img
    src={src}
    alt={alt}
    {...props}
    style={{
      width: '100%',
      height: 'auto',
      // borderRadius: '15px',
      objectFit: 'cover',
      overflow: 'hidden'
    }}
  />
);


const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(imageArray[0]);
  let imageIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(imageArray[imageIndex]);
      imageIndex = (imageIndex + 1) % imageArray.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundWrapper>
      <section className="third-section py-5">
        <Container>
          <Grid container spacing={4} alignItems="center" mb={5}>
            <Grid item md={6}>
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography variant="h2" style={{ color: 'black' }}>About Us</Typography>
                <Typography paragraph>
                  Rare Interior Group, a leading UAE-based company founded in 2018. With over 7 years
                  of expertise, we specialize in delivering exceptional visual merchandising solutions
                  for retail jewelry stores, dynamic exhibitions, and bespoke interior designs for both residential and commercial spaces.
                </Typography>
                <Button variant="outlined" color="primary" style={{ padding: '15px' }}>
                  About Us
                </Button>
              </motion.div>
            </Grid>
            <Grid item md={6}>
              <AnimatedImage
                src={about1}
                alt="About Us Image"
                whileHover={{ scale: 1.05 }}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="img-fluid"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item md={6}>
              <AnimatedImage
                src={currentImage}
                alt="Our Services Image"
                whileHover={{ scale: 1.05 }}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="img-fluid"
              />
            </Grid>
            <Grid item md={6}>
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography variant="h2" style={{ color: "black" }}>Our Services</Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsa unde saepe in incidunt impedit
                  error, dolores voluptates exercitationem enim perferendis delectus molestias vel aperiam
                  doloremque doloribus nemo. Rem, quos.
                </Typography>
                <Button variant="outlined" color="primary" style={{ padding: "15px" }}>
                  Learn More
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </BackgroundWrapper>
  );
};

export default AboutSection;

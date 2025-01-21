import React, { useEffect, useState } from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import about1 from './images/about us img.png';
import about2 from './images/our service rare interior.png';







import f1 from './images/services/14.webp';
import f2 from './images/services/15.webp';
import f3 from './images/services/16.webp';
import f4 from './images/services/17.webp';
import f5 from './images/services/18.webp';
import f6 from './images/services/19.webp';
import f7 from './images/services/20.webp';
import f8 from './images/services/21.webp';
import f9 from './images/services/22.webp';
import f10 from './images/services/23.webp';


const imageArray = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

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
      width: '88%',
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
                <Typography paragraph className="text-justify">
                  Rare Interior Group has been a leader in interior design and visual merchandising since 2018. With a commitment to quality, we deliver high-end residential and commercial spaces across the UAE.
                  <b>

                    Our Expertise
                  </b>
                  We specialize in
                  ,Retail stores
                  ,Exhibitions
                  ,Offices
                  ,Villas and apartments

                  From concept to completion, we manage all aspects, including design, execution, and authority approvals, ensuring your project is handled with precision.
                  <b>

                    Our Promise
                  </b>
                  We prioritize quality over quantity by working on a limited number of projects, allowing us to focus on:
                  , Personalized solutions
                  , Attention to detail
                  , Functional and aesthetic excellence
                  Experience a seamless journey from vision to reality with Rare Interior Group
                  {/* <Button variant="outlined" color="primary" style={{ padding: '15px' }}>
                    About Us
                  </Button> */}
                </Typography>
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

import React from 'react';
import { Button, Typography, Container, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';



import about1 from './images/about1.png';
import about2 from './images/about2.png';

// Styled component for animated image
const AnimatedImage = styled(motion.img)({
  transition: 'transform 0.3s ease-in-out',
});

const AboutSection = () => {
  return (
    <section className="third-section py-5">
      <Container>
        <Grid container spacing={4} alignItems="center" mb={5}>
          <Grid item md={6}>
            <Typography variant="h2" style={{ color: 'black' }}>About Us</Typography>
            <Typography paragraph>
              Rare Interior Group, a leading UAE-based
              company founded in 2018. With over 7 years
              of expertise, we specialize in delivering
              exceptional visual merchandising solutions
              for retail jewelry stores, dynamic exhibitions,
              and bespoke interior designs for both residential and commercial spaces.

            </Typography>
            <Button variant="outlined" color="primary" style={{ padding: '15px' }}>
              About Us
            </Button>
          </Grid>
          <Grid item md={6}>
            <AnimatedImage
              src={about1}
              alt="About Us Image"
              whileHover={{ scale: 1.05 }} // Animation on hover
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
              src={about2}
              alt="About Us Image"
              whileHover={{ scale: 1.05 }} // Animation on hover
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item md={6} className='text-align-end float-right' style={{alignItems:'end!important'}}>
            <Typography variant="h2" style={{ color: 'black', alignItems:'right' }}>Our Services</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsa unde saepe in incidunt impedit
              error, dolores voluptates exercitationem enim perferendis delectus molestias vel aperiam
              doloremque doloribus nemo. Rem, quos.
            </Typography>
            <Button variant="outlined" color="primary" style={{ padding: '15px' }}>
              About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutSection;

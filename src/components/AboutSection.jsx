import React from 'react';
import { Button, Typography, Container, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';

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
            <Typography variant="h2" style={{color:'black'}}>About Us</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsa unde saepe in incidunt impedit
              error, dolores voluptates exercitationem enim perferendis delectus molestias vel aperiam
              doloremque doloribus nemo. Rem, quos.
            </Typography>
            <Button variant="outlined" color="primary" style={{ padding: '15px' }}>
              About Us
            </Button>
          </Grid>
          <Grid item md={6}>
            <AnimatedImage
              src="https://wp-themes.com/wp-content/themes/inspiro/assets/images/StockSnap_JKMGVEJMPU.jpg"
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
              src="https://wp-themes.com/wp-content/themes/inspiro/assets/images/StockSnap_JKMGVEJMPU.jpg"
              alt="About Us Image"
              whileHover={{ scale: 1.05 }} // Animation on hover
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item md={6} className='text-align-end'>
            <Typography variant="h2" style={{color:'black'}}>Our Services</Typography>
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

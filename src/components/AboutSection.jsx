import React from 'react';
import { Button, Typography, Container, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';

import about1 from './images/about us img.png';
import about2 from './images/our service rare interior.png';

// Styled component for animated image
const AnimatedImage = styled(motion.img)({
  transition: 'transform 0.3s ease-in-out',
});

// Animation variants for section entry
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutSection = () => {
  return (
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
              src={about2}
              alt="Our Services Image"
              whileHover={{ scale: 1.05 }}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item md={6}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography variant="h2" style={{ color: 'black' }}>Our Services</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsa unde saepe in incidunt impedit
                error, dolores voluptates exercitationem enim perferendis delectus molestias vel aperiam
                doloremque doloribus nemo. Rem, quos.
              </Typography>
              <Button variant="outlined" color="primary" style={{ padding: '15px' }}>
                Learn More
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { Container, Typography, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';

// Styled component for animated text
const AnimatedText = styled(motion.div)({
  color: 'white', // Set text color to white
  textAlign: 'left',
  padding: '20px',
});

const BlackSection = () => {
  return (
    <section className="black-section" style={{ backgroundColor: '#000', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6}>
            <AnimatedText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h2">Get in Touch</Typography>
              <Typography variant="body1">Lorem ips</Typography>
            </AnimatedText>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BlackSection;

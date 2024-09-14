import React from 'react';
import { Card, CardMedia, CardContent, Grid, Typography, styled } from '@mui/material';

// Styled component for animated card
const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
  textAlign: 'center',
}));

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <Typography variant="h2" gutterBottom>
        Our Portfolio
      </Typography>
      <Typography variant="body1" paragraph>
        Over the years, we’ve had the privilege of working with some of the most prestigious brands across the globe.
        From creating bespoke retail environments to designing luxurious living spaces, our work speaks for itself.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <AnimatedCard>
            <CardMedia
              component="img"
              height="200"
              image="https://wp-themes.com/wp-content/themes/inspiro/assets/images/StockSnap_356BERTH29.jpg"
              alt="Portfolio Image 1"
            />
            <CardContent>
              <Typography variant="h6">Project 1</Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <AnimatedCard>
            <CardMedia
              component="img"
              height="200"
              image="https://wp-themes.com/wp-content/themes/inspiro/assets/images/StockSnap_356BERTH29.jpg"
              alt="Portfolio Image 2"
            />
            <CardContent>
              <Typography variant="h6">Project 2</Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <AnimatedCard>
            <CardMedia
              component="img"
              height="200"
              image="https://wp-themes.com/wp-content/themes/inspiro/assets/images/StockSnap_356BERTH29.jpg"
              alt="Portfolio Image 3"
            />
            <CardContent>
              <Typography variant="h6">Project 3</Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>
    </section>
  );
};

export default PortfolioSection;

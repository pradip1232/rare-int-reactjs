import React from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', padding: '40px 0' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom color="white">
              Contact Information
            </Typography>
            <Typography variant="body1" color="white">
              123 Street Name, City, Country
            </Typography>
            <Typography variant="body1" color="white">
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body1" color="white">
              Email: info@example.com
            </Typography>
          </Grid>

          {/* Scan Code to WhatsApp */}
          {/* <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom color="white">
              Scan Code to WhatsApp
            </Typography>
            <img// Replace with your QR code image URL
              alt="WhatsApp QR Code"
              style={{ width: '150px', height: '150px' }}
            />
          </Grid> */}

          {/* Follow Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom color="white">
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ animation: 'rotateIcon 2s infinite alternate', color: 'white' }}
              >
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ animation: 'rotateIcon 2s infinite alternate', color: 'white' }}
              >
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ animation: 'rotateIcon 2s infinite alternate', color: 'white' }}
              >
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ animation: 'rotateIcon 2s infinite alternate', color: 'white' }}
              >
                <LinkedIn fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes rotateIcon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(15deg);
          }
        }

        footer {
          background-color: #333;
          color: white;
          padding: 40px 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

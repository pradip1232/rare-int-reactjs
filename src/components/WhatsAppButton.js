// WhatsAppButton.js
import React from 'react';
import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919667799620'; // Replace with your WhatsApp number
    const message = 'Hello, I need help with...'; // Predefined message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp green
        color: 'white',
      }}
      onClick={handleWhatsAppClick}
    >
      <WhatsApp />
    </Fab>
  );
};

export default WhatsAppButton;

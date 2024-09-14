import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert, Container, Typography, Box, Grid } from '@mui/material';
import axios from 'axios';
import { People, Email, Phone, Message } from '@mui/icons-material'; // Icons from MUI

const HelpSection = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost/rare-back-end/help-details.php',
        new URLSearchParams(formData)
      );
      console.log(response.data);
      setSnackbarMessage(response.data);
      setSnackbarOpen(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      alert('There was an error submitting the form. Please check the console for more details.');
    }
  };

  return (
    <Container maxWidth={false} disableGutters> {/* Full-width container */}
      <Box component="section" p={4} boxShadow={3} borderRadius={2} bgcolor="#f9f9f9">
        <Grid container>
          {/* Left Column: Icon and Text */}
          <Grid item xs={12} md={5} style={{ backgroundColor: '#f9f9f9', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box textAlign="center" p={3}>
              <People style={{ fontSize: '80px', color: 'rgba(0, 0, 0, 0.54)' }} />
              <Typography variant="h5" component="p" mt={2}>
                Need Assistance? We're here to help!
              </Typography>
            </Box>
          </Grid>

          {/* Right Column: Form */}
          <Grid item xs={12} md={7} p={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              How can I help you?
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <People color="action" />, // Add icon inside input
                }}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <Email color="action" />, // Add icon inside input
                }}
              />
              <TextField
                id="mobile"
                label="Mobile Number"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.mobile}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <Phone color="action" />, // Add icon inside input
                }}
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.message}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <Message color="action" />, // Add icon inside input
                }}
              />
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="success" type="submit">
                  Send
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default HelpSection;

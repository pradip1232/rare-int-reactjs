import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // For making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const HelpModal = () => {
  const [show, setShow] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // For Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Message to show in Snackbar
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSnackbarClose = () => setSnackbarOpen(false); // Close Snackbar

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost/rare-back-end/help-details.php',
        new URLSearchParams(formData) // Encode form data as URL-encoded
      );
      console.log(response.data); // Log server response

      // Show success Snackbar with server response
      setSnackbarMessage(response.data);
      setSnackbarOpen(true);

      handleClose();
    } catch (error) {
      console.error(
        'Error submitting form:',
        error.response ? error.response.data : error.message
      );
      alert(
        'There was an error submitting the form. Please check the console for more details.'
      );
    }
  };

  return (
    <>
      {/* Help Icon Button at the Bottom Right */}
      <div className="help-icon" onClick={handleShow}>
        <FontAwesomeIcon icon={faHeadset} size="2x" />
        <span className="help-text">How can I help you?</span>
      </div>

      {/* Modal with Custom Position */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="custom-modal"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>How can I help you?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="helpForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button className="float-right" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Auto hide after 6 seconds
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Show on the top-right corner
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Custom styles */}
      <style jsx>{`
        .help-icon {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #007bff;
          color: white;
          padding: 10px 15px;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 1050;
          transition: background-color 0.3s ease-in-out;
        }

        .help-icon:hover {
          background-color: #0056b3;
        }

        .help-text {
          font-size: 14px;
        }

        /* Custom modal position */
        .custom-modal {
          position: fixed;
          bottom: 20px;
          right: 20px;
          margin: 0;
          width: 300px; /* Adjust as needed */
          max-width: 100vw; /* Ensure responsiveness */
          z-index: 1051;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default HelpModal;

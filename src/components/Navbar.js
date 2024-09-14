import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS

function NavbarComponent() {
  const [isExpanded, setIsExpanded] = useState(false); // State to track navbar expansion

  // Function to handle the toggle button
  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the state between true/false
  };

  // Function to close the navbar when clicking a link
  const handleNavItemClick = () => {
    setIsExpanded(false); // Close the navbar
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="custom-navbar"
      fixed="top"
      expanded={isExpanded} // Set navbar expanded or collapsed based on the state
    >
      <Container>
        {/* Navbar Brand */}
        {/* <Navbar.Brand as={Link} to="/" className="brand">MyWebsite</Navbar.Brand> */}

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle} // Toggle the navbar on button click
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"> {/* Centers the Nav items */}
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-custom"
              onClick={handleNavItemClick} // Close the navbar on link click
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              className="nav-link-custom"
              onClick={handleNavItemClick} // Close the navbar on link click
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              className="nav-link-custom"
              onClick={handleNavItemClick} // Close the navbar on link click
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              className="nav-link-custom"
              onClick={handleNavItemClick} // Close the navbar on link click
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              className="nav-link-custom"
              onClick={handleNavItemClick} // Close the navbar on link click
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

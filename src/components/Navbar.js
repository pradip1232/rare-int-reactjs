import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import './Navbar.css';

function NavbarComponent() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false); 
  const [showSidebar, setShowSidebar] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const path = location.pathname.split('/').filter(Boolean).pop();
    const pageTitle = path
      ? path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
      : 'Rare Interior Group | Home';
    document.title = pageTitle;
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // When scrolled 50px or more
        setNavbarBg('rgba(0, 0, 0, 0.8)'); // Light transparent black
      } else {
        setNavbarBg('transparent'); // Fully transparent when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up
    };
  }, []);

  // Toggle navbar
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Close navbar on link click
  const handleNavItemClick = () => {
    setIsExpanded(false);
  };

  // Toggle right sidebar
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="custom-navbar"
        fixed="top"
        expanded={isExpanded}
        style={{ backgroundColor: navbarBg }} // Set background based on scroll
      >
        <Container>
          {/* Left-aligned Logo/Text */}
          <Navbar.Brand as={Link} to="/" className="brand">
            <strong>RareInterior</strong>
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle} // Toggle the navbar on button click
          />

          {/* Navbar Links */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto"> {/* Aligns the Nav items to the right */}
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

          {/* Search Icon Button without border */}
          <Button variant="outline-none" className="search-button">
            <FaSearch />
          </Button>

          {/* Sidebar Toggle Button */}
          <Button variant="outline-light" onClick={handleSidebarToggle}>
            <span className="navbar-toggler-icon"></span> {/* Bootstrap toggle icon */}
          </Button>
        </Container>
      </Navbar>

      {/* Right Sidebar */}
      <Offcanvas show={showSidebar} onHide={handleSidebarToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar Content</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>This is your right-side content</h5>
          <p>You can add any content here, such as links, forms, etc.</p>

          {/* Example of a form inside the sidebar */}
          <Form>
            <Form.Group controlId="searchForm">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Search something..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarComponent;

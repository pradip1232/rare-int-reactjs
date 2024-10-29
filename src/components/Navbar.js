// NavbarComponent.js
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

function NavbarComponent({ scrollToBlog }) {
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
      if (window.scrollY > 50) {
        setNavbarBg('rgba(0, 0, 0, 0.8)');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavItemClick = () => {
    setIsExpanded(false);
  };

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
        style={{ backgroundColor: navbarBg }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            <strong>RareInterior</strong>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom" onClick={handleNavItemClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="nav-link-custom" onClick={handleNavItemClick}>
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="nav-link-custom" >
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="nav-link-custom" onClick={scrollToBlog}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="nav-link-custom" onClick={handleNavItemClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button variant="outline-none" className="search-button">
            <FaSearch />
          </Button>

          <Button variant="outline-light" onClick={handleSidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleSidebarToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar Content</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>This is your right-side content</h5>
          <p>You can add any content here, such as links, forms, etc.</p>
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

// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

// Make sure this is a function component
const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className={scrolled ? "navbar-scrolled" : ""}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="fas fa-paw me-2"></i>
          Dejen Meto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active fw-bold" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "active fw-bold" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={
                location.pathname === "/services" ? "active fw-bold" : ""
              }
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={
                location.pathname === "/skills" ? "active fw-bold" : ""
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              className={
                location.pathname === "/resume" ? "active fw-bold" : ""
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={
                location.pathname === "/contact" ? "active fw-bold" : ""
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Make sure you have export default
export default Header;

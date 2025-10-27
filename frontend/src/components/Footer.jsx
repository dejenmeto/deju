// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 fade-in-up">
            <h5 className="mb-3">
              <i className="fas fa-paw me-2 gradient-text"></i>
              Dejen Meto
            </h5>
            <p className="mb-4">
              Veterinary Medicine Student & Full Stack Developer dedicated to
              bridging the gap between animal healthcare and technology
              innovation.
            </p>
            <div className="d-flex gap-3">
              <Button variant="outline-light" size="sm" className="social-btn">
                <i className="fab fa-linkedin"></i>
              </Button>
              <Button variant="outline-light" size="sm" className="social-btn">
                <i className="fab fa-github"></i>
              </Button>
              <Button variant="outline-light" size="sm" className="social-btn">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="outline-light" size="sm" className="social-btn">
                <i className="fab fa-instagram"></i>
              </Button>
            </div>
          </Col>

          <Col lg={2} className="mb-4 fade-in-up delay-1">
            <h6 className="mb-3 gradient-text">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-light text-decoration-none hover-link"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-light text-decoration-none hover-link"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-light text-decoration-none hover-link"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/skills"
                  className="text-light text-decoration-none hover-link"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} className="mb-4 fade-in-up delay-2">
            <h6 className="mb-3 gradient-text">More</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/resume"
                  className="text-light text-decoration-none hover-link"
                >
                  Resume
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-light text-decoration-none hover-link"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none hover-link"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none hover-link"
                >
                  Projects
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} className="mb-4 fade-in-up delay-3">
            <h6 className="mb-3 gradient-text">Newsletter</h6>
            <p className="mb-3">
              Subscribe to get updates on my latest projects and articles about
              veterinary technology.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your email address"
                className="me-2"
              />
              <Button variant="primary" className="btn-primary">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="fade-in-up">
          <Col md={6}>
            <p className="mb-0">&copy; 2025 Dejen Meto. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">
              Built with React, Bootstrap, and ❤️ for animals and technology
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

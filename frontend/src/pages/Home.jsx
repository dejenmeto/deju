// src/pages/Home.jsx
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const veterinarySkills = [
    { name: "Clinical Examination", level: 90 },
    { name: "Diagnostic Imaging", level: 85 },
    { name: "Surgical Procedures", level: 80 },
  ];

  const techSkills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Node.js", level: 85 },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title fade-in-up">
                Veterinary Medicine Student & Full Stack Developer
              </h1>
              <p className="hero-subtitle fade-in-up delay-1">
                Bridging the gap between animal healthcare and technology
                innovation. Passionate about creating digital solutions for
                veterinary medicine.
              </p>
              <div className="d-flex gap-3 flex-wrap fade-in-up delay-2">
                <Button
                  as={Link}
                  to="/contact"
                  variant="light"
                  size="lg"
                  className="btn-primary"
                >
                  Get In Touch
                </Button>
                <Button
                  as={Link}
                  to="/resume"
                  variant="outline-light"
                  size="lg"
                >
                  View Resume
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="profile-container fade-in-right delay-1">
                <div className="profile-placeholder">
                  <i className="fas fa-user-md"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-5 bg-pattern">
        <Container>
          <Row className="scroll-animate">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">About Me</h2>
              <p className="lead mb-4">
                I'm a dedicated veterinary medicine student with a passion for
                technology. My unique background allows me to understand both
                animal healthcare needs and digital solution development.
              </p>
              <Button
                as={Link}
                to="/about"
                variant="primary"
                className="btn-primary"
              >
                Learn More About Me
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Preview */}
      <section className="py-5">
        <Container>
          <Row className="scroll-animate">
            <h2 className="section-title text-center mb-5">My Skills</h2>
            <Col md={6} className="fade-in-left">
              <h4 className="mb-4 gradient-text">
                <i className="fas fa-stethoscope me-2"></i>
                Veterinary Skills
              </h4>
              {veterinarySkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </Col>
            <Col md={6} className="fade-in-right">
              <h4 className="mb-4 gradient-text">
                <i className="fas fa-code me-2"></i>
                Development Skills
              </h4>
              {techSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-pattern">
        <Container>
          <Row className="scroll-animate">
            <h2 className="section-title text-center mb-5">My Services</h2>
            <Col md={4} className="mb-4 fade-in-up delay-1">
              <Card className="h-100 text-center service-card hover-lift">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <Card.Title className="gradient-text">
                    Web Development
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    Custom web applications and websites for veterinary
                    practices and animal healthcare organizations.
                  </Card.Text>
                  <Button as={Link} to="/services" variant="primary" size="sm">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 fade-in-up delay-2">
              <Card className="h-100 text-center service-card hover-lift">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <i className="fas fa-stethoscope"></i>
                  </div>
                  <Card.Title className="gradient-text">
                    Veterinary Tech
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    Technology consulting for veterinary clinics to improve
                    digital workflows and patient management.
                  </Card.Text>
                  <Button as={Link} to="/services" variant="primary" size="sm">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 fade-in-up delay-3">
              <Card className="h-100 text-center service-card hover-lift">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <Card.Title className="gradient-text">Mobile Apps</Card.Title>
                  <Card.Text className="flex-grow-1">
                    Mobile apps for veterinary reference, drug calculators, and
                    clinical decision support.
                  </Card.Text>
                  <Button as={Link} to="/services" variant="primary" size="sm">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

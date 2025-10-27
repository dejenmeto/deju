// src/pages/Services.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "Custom web applications for veterinary practices and animal healthcare businesses.",
    },
    {
      icon: "fas fa-stethoscope",
      title: "Veterinary Tech Solutions",
      description:
        "Technology consulting and digital solutions for veterinary professionals.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Applications",
      description:
        "Mobile apps for veterinary reference and clinical decision support.",
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      description:
        "Secure database solutions for veterinary research and practice data.",
    },
  ];

  return (
    <div className="services-page">
      <Container className="py-5 mt-5">
        <Row className="scroll-animate">
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center mb-3">My Services</h1>
            <p className="lead text-center mb-5 fade-in-up">
              Combining veterinary medicine expertise with full-stack
              development skills.
            </p>

            <Row>
              {services.map((service, index) => (
                <Col lg={6} className="mb-4" key={index}>
                  <Card className="h-100 service-card hover-lift">
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="text-center mb-3">
                        <i
                          className={`${service.icon} fa-3x gradient-text`}
                        ></i>
                      </div>
                      <Card.Title className="text-center gradient-text h4">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="flex-grow-1 text-center text-muted">
                        {service.description}
                      </Card.Text>
                      <div className="d-grid">
                        <Button
                          as={Link}
                          to="/contact"
                          variant="primary"
                          className="btn-primary"
                        >
                          Get Started
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

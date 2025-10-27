// src/pages/Resume.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Resume = () => {
  const education = [
    {
      degree: "Doctor of Veterinary Medicine (DVM)",
      school: "University of Addiss Ababa",
      period: "2024 - Present",
    },
  ];

  return (
    <div className="resume-page">
      <Container className="py-5 mt-5">
        <Row className="scroll-animate">
          <Col lg={10} className="mx-auto">
            <div className="text-center mb-5 fade-in-up">
              <h1 className="section-title mb-3">My Resume</h1>
              <Button variant="primary" size="lg" className="btn-primary mt-3">
                <i className="fas fa-download me-2"></i>
                Download Resume
              </Button>
            </div>

            <Card className="hover-lift fade-in-up">
              <Card.Body className="p-4">
                <Card.Title className="gradient-text h3 mb-4">
                  <i className="fas fa-graduation-cap me-2"></i>
                  Education
                </Card.Title>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <Row>
                      <Col md={9}>
                        <h4 className="gradient-text mb-2">{edu.degree}</h4>
                        <h5 className="text-primary mb-2">{edu.school}</h5>
                      </Col>
                      <Col md={3} className="text-md-end">
                        <span className="text-muted">{edu.period}</span>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;

// src/pages/Skills.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Skills = () => {
  const veterinarySkills = [
    { name: "Clinical Examination", level: 90 },
    { name: "Diagnostic Imaging", level: 85 },
    { name: "Surgical Procedures", level: 80 },
  ];

  const techSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
  ];

  return (
    <div className="skills-page">
      <Container className="py-5 mt-5">
        <Row className="scroll-animate">
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center mb-5">My Skills</h1>

            <Row>
              <Col lg={6} className="mb-4">
                <Card className="hover-lift fade-in-up">
                  <Card.Body>
                    <Card.Title className="gradient-text h4">
                      <i className="fas fa-stethoscope me-2"></i>
                      Veterinary Skills
                    </Card.Title>
                    {veterinarySkills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
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
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="hover-lift fade-in-up">
                  <Card.Body>
                    <Card.Title className="gradient-text h4">
                      <i className="fas fa-code me-2"></i>
                      Technical Skills
                    </Card.Title>
                    {techSkills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
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
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;

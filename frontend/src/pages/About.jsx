// src/pages/About.jsx
import React from "react";
import { Container, Row, Col, Card, ProgressBar, Badge } from "react-bootstrap";
import PhotoContainer from "../components/PhotoContainer";
import Photo from "../assets/images/dejen.jpg"; // Update with your photo path
const About = () => {
  const stats = [
    { label: "Veterinary Studies", value: 85 },
    { label: "Web Development", value: 90 },
    { label: "Clinical Research", value: 70 },
    { label: "Project Completion", value: 95 },
  ];

  const skills = [
    { name: "Animal Clinical Examination", category: "veterinary" },
    { name: "Diagnostic Procedures", category: "veterinary" },
    { name: "Surgical Assistance", category: "veterinary" },
    { name: "React Development", category: "tech" },
    { name: "Node.js Backend", category: "tech" },
    { name: "Database Management", category: "tech" },
    { name: "UI/UX Design", category: "tech" },
    { name: "Project Management", category: "soft" },
  ];

  return (
    <div className="about-page">
      <Container className="py-5 mt-5">
        {/* Header Section with Photo - Fixed Layout */}
        <Row className="align-items-start mb-5 scroll-animate">
          <Col md={4} className="text-center mb-4">
            <div className="about-photo-container">
              <PhotoContainer
                src={Photo} // Update with your photo path
                alt="Dejen Meto - Veterinary Student & Developer"
                size="large" // Changed from xlarge to large
                shape="circle"
                border={true}
                shadow={true}
                hoverEffect={true}
                className="fade-in-left"
              />
            </div>
          </Col>
          <Col md={8} className="fade-in-right">
            <div className="about-content">
              <h1 className="section-title text-start mb-3">About Me</h1>
              <p className="lead mb-4">
                Hi, I'm{" "}
                <span className="gradient-text fw-bold">Dejen Meto</span>, a
                passionate Veterinary Medicine student and Full Stack Developer
                dedicated to bridging the gap between animal healthcare and
                technology.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Badge bg="primary" className="fs-6 p-2">
                  Veterinary Student
                </Badge>
                <Badge bg="success" className="fs-6 p-2">
                  Full Stack Developer
                </Badge>
                <Badge bg="info" className="fs-6 p-2">
                  Tech Innovator
                </Badge>
              </div>
            </div>
          </Col>
        </Row>

        {/* My Story Section */}
        <Row className="mb-5 scroll-animate">
          <Col lg={12}>
            <Card className="hover-lift">
              <Card.Body className="p-5">
                <h3 className="gradient-text text-center mb-4">My Journey</h3>
                <Row>
                  <Col md={6}>
                    <p className="mb-4">
                      My journey began with a deep fascination for both animal
                      medicine and technology. While pursuing my veterinary
                      medicine degree, I discovered the power of software
                      development to solve complex healthcare challenges.
                    </p>
                    <p className="mb-4">
                      This unique combination allows me to approach problems
                      from both clinical and technological perspectives,
                      creating solutions that are both medically sound and
                      technically robust.
                    </p>
                  </Col>
                  <Col md={6}>
                    <p className="mb-4">
                      I believe that technology can significantly improve animal
                      healthcare delivery, patient outcomes, and make veterinary
                      services more accessible to everyone.
                    </p>
                    <p>
                      When I'm not studying veterinary medicine or coding, I'm
                      actively working on projects that combine both fields,
                      developing tools that help veterinary professionals and
                      pet owners alike.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Skills & Expertise */}
        <Row className="mb-5 scroll-animate">
          <Col lg={12}>
            <h3 className="section-title text-center mb-5">
              Skills & Expertise
            </h3>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 hover-lift">
                  <Card.Body className="text-center p-4">
                    <div className="mb-4">
                      <i className="fas fa-stethoscope fa-3x gradient-text"></i>
                    </div>
                    <Card.Title className="gradient-text h4">
                      Veterinary Medicine
                    </Card.Title>
                    <Card.Text className="mb-4">
                      Comprehensive knowledge in animal healthcare, diagnostics,
                      and treatment protocols.
                    </Card.Text>
                    <div className="text-start">
                      {skills
                        .filter((skill) => skill.category === "veterinary")
                        .map((skill, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center mb-2"
                          >
                            <i className="fas fa-check text-success me-2"></i>
                            <span>{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 hover-lift">
                  <Card.Body className="text-center p-4">
                    <div className="mb-4">
                      <i className="fas fa-code fa-3x gradient-text"></i>
                    </div>
                    <Card.Title className="gradient-text h4">
                      Technology & Development
                    </Card.Title>
                    <Card.Text className="mb-4">
                      Full-stack development expertise with modern technologies
                      and frameworks.
                    </Card.Text>
                    <div className="text-start">
                      {skills
                        .filter((skill) => skill.category === "tech")
                        .map((skill, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center mb-2"
                          >
                            <i className="fas fa-check text-success me-2"></i>
                            <span>{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Progress Stats */}
        <Row className="mb-5 scroll-animate">
          <Col lg={8} className="mx-auto">
            <h3 className="gradient-text text-center mb-4">
              Current Focus & Progress
            </h3>
            {stats.map((stat, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">{stat.label}</span>
                  <span className="text-primary">{stat.value}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        {/* Personal Values */}
        <Row className="scroll-animate">
          <Col lg={12}>
            <h3 className="section-title text-center mb-5">My Values</h3>
            <Row>
              <Col md={4} className="text-center mb-4 fade-in-up delay-1">
                <div className="p-4 border rounded hover-lift h-100">
                  <i className="fas fa-heart fa-2x gradient-text mb-3"></i>
                  <h5 className="gradient-text">Compassion for Animals</h5>
                  <p className="mb-0">
                    Dedicated to improving animal welfare through both medical
                    care and technological innovation.
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-4 fade-in-up delay-2">
                <div className="p-4 border rounded hover-lift h-100">
                  <i className="fas fa-lightbulb fa-2x gradient-text mb-3"></i>
                  <h5 className="gradient-text">Innovation</h5>
                  <p className="mb-0">
                    Constantly exploring new ways to merge veterinary science
                    with cutting-edge technology.
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-4 fade-in-up delay-3">
                <div className="p-4 border rounded hover-lift h-100">
                  <i className="fas fa-graduation-cap fa-2x gradient-text mb-3"></i>
                  <h5 className="gradient-text">Lifelong Learning</h5>
                  <p className="mb-0">
                    Committed to continuous education in both veterinary
                    medicine and software development.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

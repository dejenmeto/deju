// src/pages/Contact.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <Container className="py-5 mt-5">
        <Row className="scroll-animate">
          <Col lg={10} className="mx-auto">
            <h1 className="section-title text-center mb-3">Get In Touch</h1>

            <Row>
              <Col lg={8} className="mb-4 fade-in-left">
                <Card className="hover-lift">
                  <Card.Body className="p-4">
                    <Card.Title className="gradient-text h3 mb-4">
                      Send Message
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-primary w-100"
                      >
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mb-4 hover-lift fade-in-right">
                  <Card.Body className="text-center p-4">
                    <i className="fas fa-envelope fa-2x gradient-text mb-3"></i>
                    <h5>Email</h5>
                    <p className="mb-0">dejen613@gmail.com</p>
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

export default Contact;

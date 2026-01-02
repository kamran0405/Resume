// src/components/About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About({ about }) {
  return (
    <section id="about" className="section fade-in-section">
      <Container>
        <h3 className="section-title">About Me</h3>
        <Row>
          <Col md={8}>
            <p className="section-text">{about.summary}</p>
          </Col>
          <Col md={4}>
            <ul className="highlight-list">
              {about.highlights.map((item, index) => (
                <li key={index} className="highlight-item">
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
// src/components/Skills.jsx
import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

function Skills({ skills }) {
  const renderSkillGroup = (title, list) => (
    <Col md={6} lg={4} className="mb-4" key={title}>
      <div className="skill-card">
        <h5 className="skill-title">{title}</h5>
        <div className="skill-badges">
          {list.map((item) => (
            <Badge bg="secondary" className="skill-badge" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Col>
  );

  return (
    <section id="skills" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Skills</h3>
        <Row>
          {renderSkillGroup("Frontend", skills.frontend)}
          {renderSkillGroup("Backend", skills.backend)}
          {renderSkillGroup("Databases", skills.databases)}
          {renderSkillGroup("Tools & Others", skills.toolsAndOthers)}
          {renderSkillGroup("Soft Skills", skills.softSkills)}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
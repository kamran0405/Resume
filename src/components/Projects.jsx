// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

function Projects({ projects }) {
  return (
    <section id="projects" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Projects</h3>
        <Row>
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.name} className="mb-4">
              <Card className="project-card h-100">
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {project.tagline}
                  </Card.Subtitle>
                  <ul className="project-list">
                    {project.bullets.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-tech">
                    {project.techStack.map((tech) => (
                      <Badge bg="secondary" key={tech} className="me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                {(project.githubUrl || project.liveUrl) && (
                  <Card.Footer className="project-footer">
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline-primary"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Card.Footer>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
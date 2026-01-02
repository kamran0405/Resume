// src/components/Languages.jsx
import React from "react";
import { Container, Badge } from "react-bootstrap";

function Languages({ languages }) {
  if (!languages || languages.length === 0) return null;

  return (
    <section id="languages" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Languages</h3>
        <div className="languages-list">
          {languages.map((lang) => (
            <Badge
              bg="secondary"
              key={lang.name}
              className="me-2 mb-2 language-badge"
            >
              {lang.name} · {lang.level}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Languages;
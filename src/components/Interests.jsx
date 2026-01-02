// src/components/Interests.jsx
import React from "react";
import { Container, Badge } from "react-bootstrap";

function Interests({ interests }) {
  if (!interests || interests.length === 0) return null;

  return (
    <section id="interests" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Interests</h3>
        <div className="interests-list">
          {interests.map((interest) => (
            <Badge
              bg="outline"
              key={interest}
              className="interest-badge me-2 mb-2"
            >
              {interest}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Interests;
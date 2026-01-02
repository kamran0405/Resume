// src/components/Education.jsx
import React from "react";
import { Container } from "react-bootstrap";

function Education({ educationAndTraining }) {
  return (
    <section id="education" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Education & Training</h3>
        {educationAndTraining.map((item) => (
          <div
            key={item.institution + item.program}
            className="education-item"
          >
            <h5>{item.program}</h5>
            <p className="text-muted">
              {item.institution} · {item.location}
            </p>
            <p className="text-muted">
              {item.startDate} – {item.endDate}
            </p>
            <ul>
              {item.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Education;
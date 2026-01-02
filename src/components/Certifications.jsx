// src/components/Certifications.jsx
import React from "react";
import { Container } from "react-bootstrap";

function Certifications({ certifications }) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Certifications</h3>
        {certifications.map((cert) => (
          <div key={cert.name} className="cert-item">
            <h5>{cert.name}</h5>
            <p className="text-muted">
              {cert.issuer} · {cert.date}
            </p>
            <ul>
              {cert.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Certifications;
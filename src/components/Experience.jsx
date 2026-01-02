// src/components/Experience.jsx
import React from "react";
import { Container } from "react-bootstrap";

function Experience({ experience }) {
  return (
    <section id="experience" className="section fade-in-section d-none">
      <Container>
        <h3 className="section-title">Experience</h3>
        {experience && experience.length > 0 ? (
          experience.map((job) => (
            <div key={job.title + job.company} className="experience-item">
              <h5>
                {job.title} · {job.company}
              </h5>
              <p className="text-muted">
                {job.location} · {job.startDate} – {job.endDate}
              </p>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="section-text">
            Experience section placeholder. Add roles to <code>experience</code>{" "}
            in <code>resumeData.js</code> when you have them.
          </p>
        )}
      </Container>
    </section>
  );
}

export default Experience;
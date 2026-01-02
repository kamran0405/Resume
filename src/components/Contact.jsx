// src/components/Contact.jsx
import React from "react";
import { Container } from "react-bootstrap";

function Contact({ contact }) {
  return (
    <section id="contact" className="section fade-in-section">
      <Container>
        <h3 className="section-title">Contact</h3>
        <p className="section-text">
          I’m currently looking for opportunities to grow as a full‑stack
          developer. Feel free to reach out.
        </p>
        <ul className="contact-list">
          {contact.location && (
            <li>
              <strong>Location:</strong> {contact.location}
            </li>
          )}
          {contact.openTo && (
            <li>
              <strong>Open to:</strong> {contact.openTo}
            </li>
          )}
          {contact.email && (
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          )}
          {contact.phone && (
            <li>
              <strong>Phone:</strong> {contact.phone}
            </li>
          )}
        </ul>
      </Container>
    </section>
  );
}

export default Contact;
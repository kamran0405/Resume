// src/components/Header.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";

function Header({ basicInfo }) {
  return (
    <header className="section header-section" id="top">
      <Container>
        <div className="header-inner">
          <div>
            <p className="header-overline">Junior Full-Stack Developer</p>
            <h2 className="header-name">{basicInfo.name}</h2>
            <p className="header-title">{basicInfo.title}</p>
            <p className="header-location">{basicInfo.location}</p>
            <p className="header-open-to">{basicInfo.openTo}</p>
            <div className="header-actions">
              {basicInfo.links.github && (
                <Button
                  variant="primary"
                  href={basicInfo.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Button>
              )}
              {basicInfo.links.linkedin && (
                <Button
                  variant="outline-light"
                  href={basicInfo.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
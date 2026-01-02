// src/components/Layout/Sidebar.jsx
import React from "react";
import { Nav } from "react-bootstrap";

function Sidebar({ basicInfo }) {
  return (
    <aside className="sidebar d-flex flex-column justify-content-between">
      <div>
        <div className="sidebar-header">
          <h1 className="sidebar-name">{basicInfo.name}</h1>
          <p className="sidebar-title">{basicInfo.title}</p>
          <p className="sidebar-location">{basicInfo.location}</p>
        </div>

        <Nav className="flex-column sidebar-nav">
          <Nav.Link href="#about" className="sidebar-link">
            About
          </Nav.Link>
          <Nav.Link href="#skills" className="sidebar-link">
            Skills
          </Nav.Link>
          <Nav.Link href="#projects" className="sidebar-link">
            Projects
          </Nav.Link>
          <Nav.Link href="#education" className="sidebar-link">
            Education
          </Nav.Link>
          <Nav.Link href="#certifications" className="sidebar-link">
            Certifications
          </Nav.Link>
          <Nav.Link href="#languages" className="sidebar-link">
            Languages
          </Nav.Link>
          <Nav.Link href="#interests" className="sidebar-link">
            Interests
          </Nav.Link>
          <Nav.Link href="#contact" className="sidebar-link">
            Contact
          </Nav.Link>
        </Nav>
      </div>

      <div className="sidebar-links">
        {basicInfo.links.github && (
          <a
            href={basicInfo.links.github}
            target="_blank"
            rel="noreferrer"
            className="sidebar-social-link"
          >
            GitHub
          </a>
        )}
        {basicInfo.links.linkedin && (
          <a
            href={basicInfo.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="sidebar-social-link"
          >
            LinkedIn
          </a>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
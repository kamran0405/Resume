// src/components/Footer.jsx
import React from "react";

function Footer({ basicInfo }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {year} {basicInfo.name}. Built with React, Vite, and Bootstrap.
      </p>
    </footer>
  );
}

export default Footer;
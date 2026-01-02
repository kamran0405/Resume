// src/components/Layout/MainContent.jsx
import React from "react";
import Header from "../Header";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Experience from "../Experience";
import Education from "../Education";
import Certifications from "../Certifications";
import Languages from "../Languages";
import Interests from "../Interests";
import Contact from "../Contact";
import Footer from "../Footer";

function MainContent({ data }) {
  return (
    <main className="main-content">
      <Header basicInfo={data.basicInfo} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
      <Education educationAndTraining={data.educationAndTraining} />
      <Certifications certifications={data.certifications} />
      <Languages languages={data.languages} />
      <Interests interests={data.interests} />
      <Contact contact={data.contact} />
      <Footer basicInfo={data.basicInfo} />
    </main>
  );
}

export default MainContent;
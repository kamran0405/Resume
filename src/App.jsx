// src/App.jsx
import React from "react";
import resumeData from "./data/resumeData";
import Sidebar from "./components/Layout/Sidebar";
import MainContent from "./components/Layout/MainContent";

function App() {
  return (
    <div className="app-layout">
      <Sidebar basicInfo={resumeData.basicInfo} />
      <MainContent data={resumeData} />
    </div>
  );
}

export default App;
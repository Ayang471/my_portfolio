import './App.css';
import React from 'react';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom'
import OverlayNav from './components/OverlayNav'



function App() {

  return (
    <div className="App" >
      <OverlayNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/skills" element={<SkillsSection />} />
        </Routes>
    </div>
  );
}

export default App;

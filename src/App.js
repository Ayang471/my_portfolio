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
     {/*<nav className="navbar navbar-expand-md fixed-top navbar-shrink justify-content-center align-items-center">
        <div className="container-fluid">
          <button className="navbar-toggler mx-3 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center align-items-center" id="mynavbar">
            <div className="navbar-nav justify-content-center align-items-center spacing">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/skills" className="nav-link">Skills</Link>
              <Link href="/" className="nav-link" onClick={openResume}>Resume</Link>
              <Link href="/" className="nav-link" onClick={openGitHub}>GitHub</Link>
            </div>
          </div>
        </div>
      </nav>*/}
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

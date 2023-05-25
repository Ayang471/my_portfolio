import './App.css';
import React, { useState } from 'react';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Homepage from './components/Homepage';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };



  return (
    <div className="App">
      <a href="/" title="" className={`btn ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
        <span></span>
        <span></span>
      </a>
      <div className={`menu ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
        <ul className="menu_list justify-content-center">
         <Link to="/home" title="" className='menu-link'>Home</Link>
          <Link to="/projects" title="" className='menu-link'>Projects</Link>
          <Link to="/skills" title="" className='menu-link'>Skills</Link>
          <Link href="https://drive.google.com/file/d/1WMyE2gunzDJ38F2p3nvA-sAHed-3VC33/view?usp=sharing" title="" target="_blank" rel="noopener noreferrer" className="menu-link">Resume</Link>
        </ul>
</div>
     {/* <nav className='nav-bar'>
        <ul className="nav justify-content-center">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <a href="https://drive.google.com/file/d/1WMyE2gunzDJ38F2p3nvA-sAHed-3VC33/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        </ul>
      </nav>
      */}
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<SkillsSection />} />
      </Routes>
    </div>
  );
}

export default App;

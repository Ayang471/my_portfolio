import './App.css';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Homepage from './components/Homepage';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <ul className="nav justify-content-center">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <a href="https://drive.google.com/file/d/1WMyE2gunzDJ38F2p3nvA-sAHed-3VC33/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<SkillsSection />} />
      </Routes>
    </div>
  );
}

export default App;

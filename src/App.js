import './App.css';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import MyResume from './components/MyResume'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <ul className="nav justify-content-center">
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </ul>
      </nav>
<Routes>
  <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<SkillsSection/>} />
        <Route path="/resume" element={<MyResume />} />
</Routes>
    </div>
  );
}

export default App;

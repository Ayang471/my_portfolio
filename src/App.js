import './App.css';
//import Cards from './components/Cards'
//import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
        <ul className="nav justify-content-center">
         {/* <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Skills</a>
          </li> */}
        </ul>
      </div>
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default App;

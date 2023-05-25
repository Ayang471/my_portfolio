import React, { useState } from 'react';
import '../stylesheets/overlayNav.css'
import { Link } from 'react-router-dom'

function OverlayNav() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };

    const openResume= () => {
        window.open("https://drive.google.com/file/d/1WMyE2gunzDJ38F2p3nvA-sAHed-3VC33/view?usp=sharing", "_blank");
    };
    

  return (
    <div className='nav-bar'>
          <a href="/" title="" className={`btn ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
              <span></span>
              <span></span>
          </a>
          <div className={`menu ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
              <ul className="menu_list justify-content-center">
                  <Link to="/home" title="" className='menu-link'>Home</Link>
                  <Link to="/projects" title="" className='menu-link'>Projects</Link>
                  <Link to="/skills" title="" className='menu-link'>Skills</Link>
                  <a href="/" className="menu-link" onClick={openResume}>Resume</a>
              </ul>
          </div>
    </div>
  )
}

export default OverlayNav
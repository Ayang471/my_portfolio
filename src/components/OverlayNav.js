import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function OverlayNav() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(!isActive);
        e.preventDefault();
    };

  return (
    <div className='nav-bar'>
          <a href="/" title="" className={`btn ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
              <span></span>
              <span></span>
          </a>

          <div className={`menu ${isActive ? 'is-active' : ''}`}>
              <ul className="menu_list justify-content-center">
                  <li className="menu-item"><Link to="/home" title="" className='menu-link'>Home</Link></li>
                  <li className="menu-item"><Link to="/projects" title="" className='menu-link'>Projects</Link></li>
                  <li className="menu-item"><Link to="/skills" title="" className='menu-link'>Skills</Link></li>
                  <li className="menu-item"><a href="https://drive.google.com/file/d/1WMyE2gunzDJ38F2p3nvA-sAHed-3VC33/view?usp=sharing" title="" target="_blank" rel="noopener noreferrer" className="menu-link">Resume</a></li>
              </ul>
          </div>
    </div>
  )
}

export default OverlayNav
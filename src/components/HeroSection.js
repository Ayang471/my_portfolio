import React from 'react'
import '../stylesheets/heroSectionStyles.css'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className="hero-section">
            <div classNamr='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='border'></div>
                        <div className='intro-section'>
                            <h1>
                                <span>I</span>
                                <span>'</span>
                                <span>m</span> 
                                    <br />
                                <span>A</span>
                                <span>l</span>
                                <span>i</span>
                                <span>c</span>
                                <span>e</span>
                                <br />
                                
                               </h1>
                            <h2>Take a look at some of my coding projects and design works.</h2>
                            <div className='view-btn'>
                                <Link to="/projects">View Projects</Link>
                            </div>
                            
                        </div>
                        <div className='col'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
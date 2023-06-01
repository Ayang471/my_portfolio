import React, { useContext } from 'react'
import '../stylesheets/heroSectionStyles.css'
import { Link } from 'react-router-dom'


function HeroSection() {

    return (
        <div className="hero-section" >
            <div className='container'>
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

                            <div className='intro'>
                                <h2>Feels free to take a look at some of my works.</h2>
                            </div>

                            <div className='view-btn'>
                                <Link to="/projects">View Projects</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
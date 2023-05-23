import React from 'react'
import '../stylesheets/projectCards.css'
import { ProjectList, DesignWorks } from './ListofProjects'

function ProjectCards() {

    return (
        <div className='project-cards'>
            <div className='container'>
                <div className="row ">
                    {ProjectList.map((list, index) => (
                        <div className="col" key={`project-${index}`}>
                            <div>
                                <img src={list.img} alt="weather-app" />
                            </div>
                            <div className='border'></div>
                      
                                <div className="card-body">
                                    <h5 className="card-title">{list.title}</h5>
                                    <p className="card-text">{list.des}</p>
                                    <div className='btn'>
                                        <a href={list.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                        <a href={list.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
                <div className='design-works'>
                    <div className="row ">
                        {DesignWorks.map((list, index) => (
                            <div className="col" key={`design-${index}`}>
                                <div>
                                    <img src={list.img} alt="weather-app" />
                                </div>
                                <div className='border'></div>
                              
                                    <div className="card-body">
                                        <h5 className="card-title">{list.title}</h5>
                                        <p className="card-text">{list.des}</p>
                                        <div className='btn'>
                                            <a href={list.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                        </div>
                                    </div>
                                </div>
                          
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCards
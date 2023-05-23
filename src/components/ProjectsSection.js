import React from 'react'
import '../stylesheets/projects.css'
import ProjectCards from './ProjectCards'

function ProjectsSection() {
  return (
    <div className="projects-section">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                   <div className='project-intro'>
                          <div className='border'> </div>
                       <h1>
                        Selected 
                           <br />
                        Works
                       </h1>
                       <p>Take a look at some of my projects that I have done.</p>
                </div>
                </div>
            </div>
            <section>
                  <ProjectCards />
            </section>
        </div>
    </div>
  )
}

export default ProjectsSection
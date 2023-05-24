import React from 'react'
import '../stylesheets/Skills.css'
import {SkillsList} from './SkillsList'

function Skills() {
  return (
<div className='skills'>
          <div class="container">
              <div class='row'>
                  {SkillsList.map((list, index) => (
                      <div class='col' key={index}>
                          <div class="card">
                              <img src={list.icon} alt="icon" />
                              <h1>{list.title}</h1>
                          </div>
                      </div>
                  ))}

              </div>
          </div>

</div>

  )
}

export default Skills
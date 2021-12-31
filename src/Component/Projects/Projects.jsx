import React from 'react'
import { ProjectDataAndTypes } from './Projects.data'
function Projects() {
    return (
        <>
      {
          ProjectDataAndTypes.map((type)=>{
    return (
      <section className={`section 
      ${type.title==='Landing Pages'?"landing-page":''}`}>
        <div className="section-title">
        <h3>{type.title}</h3>
        <div className="underline"></div>
      </div>
      <div className="section-center projects-page-center" >
          {
            type.info.map((project)=> {
                return (
        <article className="single-project" key={project.id}>
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}`)} alt="single project" />
            <a href={project.liveLink} 
              className="project-icon" 
              rel="noopener"
              target="_blank">
            <i className="fas fa-directions"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>{project.name}</h4>
            <p>
              {project.details.map((skill, index)=> 
                <>
                <span key={index}>{skill}</span>
                <br/>
                </>
              )}
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href={project.github} target="_blank" rel="noopener">source code</a>
            </div>
          </div>
        </article>
                )
            })
          }
      </div>
    </section>
            )
          })
      }
    </>
    )
}

export default Projects

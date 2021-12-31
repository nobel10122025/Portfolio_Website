import React from 'react'
import { ProjectData, LandingPagesData, JavascriptProjectsData} from './Projects.data'
function Projects() {
    return (
        <>
    <section className="section">
        <div className="section-title">
        <h3>my React Projects</h3>
        <div className="underline"></div>
      </div>
      <div className="section-center projects-page-center" >
          {
            ProjectData.map((project)=> {
                return (
        <article className="single-project" key={project.id}>
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}.png`)} alt="single project" />
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
    <section className="section landing-page">
        <div className="section-title">
        <h3>Landing pages</h3>
        <div className="underline"></div>
      </div>
      <div className="section-center projects-page-center" key='a'>
          {
            LandingPagesData.map((project)=> {
                return (
        <article className="single-project" key={project.id}>
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}.jpg`)} alt="single project" />
            <a href={project.liveLink} rel="noopener"
            className="project-icon" target="_blank">
            <i className="fas fa-directions"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>{project.name}</h4>
            <p>
              {project.details.map((skill , index)=> 
              <>
              <span key={index}>{skill}</span>
              <br/>
              </>)}
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
    <section className="section">
        <div className="section-title">
        <h3>JavaScript Based Projects</h3>
        <div className="underline"></div>
      </div>
      <div className="section-center projects-page-center" key='b'>
          {
            JavascriptProjectsData.map((project)=> {
                return (
        <article className="single-project" key={project.id}>
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}.png`)} alt="single project" />
            <a href={project.liveLink} 
            rel="noopener"
            className="project-icon" 
            target="_blank">
            <i className="fas fa-directions"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>{project.name}</h4>
            <p>
              {project.details.map((skill , index)=> 
              <>
              <span key={index}>{skill}</span>
              <br/>
              </>)}
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href={project.github} rel="noopener"
              target="_blank">source code</a>
            </div>
          </div>
        </article>
                )
            })
          }
       <p>For more Projects  <a href="https://github.com/nobel10122025" 
        className="btn hero-btn" 
        target="_blank" 
        rel="noopener"
        >Click here</a></p>
      </div>
    </section>
    </>
    )
}

export default Projects

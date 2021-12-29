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
      <div className="section-center projects-page-center">
          {
            ProjectData.map((project)=> {
                return (
                    <article className="single-project">
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}.png`)} alt="single project" />
            <a href={project.liveLink} className="project-icon">
            <i className="fas fa-directions"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>{project.name}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eveniet amet odit aperiam, provident cum possimus sapiente minus
              quos! Ipsum?
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href={project.github}>source code</a>
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
      <div className="section-center projects-page-center">
          {
            LandingPagesData.map((project)=> {
                return (
                    <article className="single-project">
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}.jpg`)} alt="single project" />
            <a href={project.liveLink} className="project-icon">
            <i className="fas fa-directions"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>{project.name}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eveniet amet odit aperiam, provident cum possimus sapiente minus
              quos! Ipsum?
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href={project.github}>source code</a>
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
      <div className="section-center projects-page-center">
          {
            JavascriptProjectsData.map((project)=> {
                return (
                    <article className="single-project">
          <div className="project-container">
            <img src={require(`../../Assets/images/screenshots/${project.image}.png`)} alt="single project" />
            <a href={project.liveLink} className="project-icon">
            <i className="fas fa-directions"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>{project.name}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eveniet amet odit aperiam, provident cum possimus sapiente minus
              quos! Ipsum?
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href={project.github}>source code</a>
            </div>
          </div>
        </article>
                )
            })
          }
       <p>For more Projects  <a href="#" className="btn hero-btn">Click here</a></p>
      </div>
    </section>
    </>
    )
}

export default Projects

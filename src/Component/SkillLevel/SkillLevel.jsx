import React from 'react'
import { SkillLevelFront , ReactSpecific } from './SillLevel.data'
function SkillLevel() {
    return (
        <div>
             <section className="section skills">
            <div className="section-title">
                <h2>skills</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center skills-center">
                <article>
                <h3>front end</h3>
              {
                  SkillLevelFront.map((skill , index)=>{
                      return(
                        <div className="skill" key={index}>
                        <p>{skill[0]}</p>
                        <div className="skill-container">
                            <div className="skill-value" style={{width:skill[1]}}></div>
                            <p className="skill-text" style={{left:skill[1]}}>
                                {skill[1]}
                            </p>
                        </div>
                        </div>
                      )
                  })
              }
            
        </article>
        <article>
          <h3>React Framework</h3>
        {
            ReactSpecific.map((skill , index)=>{
                return(
                <div className="skill" key={index}>
                <p>{skill[0]}</p>
                <div className="skill-container">
                    <div className="skill-value" style={{width:skill[1]}}></div>
                    <p className="skill-text" style={{left:skill[1]}}>
                        {skill[1]}
                    </p>
                </div>
                </div>
                )
            })
        }
        </article>
      </div>
    </section>
        </div>
    )
}

export default SkillLevel

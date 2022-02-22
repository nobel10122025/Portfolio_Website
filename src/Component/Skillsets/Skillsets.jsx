import React from 'react'
import { techStack } from './Skillset.data';
import aboutImg from '../../Assets/images/about-image.svg';
import SkillLevel from '../SkillLevel/SkillLevel';
import TimeLine from '../TimeLine/TimeLine';
function Skillsets() {
    return (
        <>
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img
            src={aboutImg}
            className="hero-photo"
            alt="about img"
          />
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2>About</h2>
            <div className="underline"></div>
          </div>
          <p>
            I am frontend developer with much interest in React framework. I love to Work with JSX elements 
            They have just made our life easier.
          </p>
          <div className='tech-container'>
           {
               techStack.map((item,index)=>
               <img key={index} src={require(`../../Assets/images/tech-stack/${item}`)} alt={item}/>)
           }
          </div>
        </article>
      </div>
    </section>
    <TimeLine />
    <SkillLevel />
</>
    )
}

export default Skillsets

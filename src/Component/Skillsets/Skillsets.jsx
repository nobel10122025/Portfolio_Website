import React from 'react'
import { techStack } from './Skillset.data';
import aboutImg from '../../Assets/images/about-image.svg';

function Skillsets() {
    return (
        <>
    <section class="section about">
      <div class="section-center about-center">
        <article class="about-img">
          <img
            src={aboutImg}
            class="hero-photo"
            alt="about img"
          />
        </article>
        <article class="about-info">
          <div class="section-title about-title">
            <h2>About</h2>
            <div class="underline"></div>
          </div>
          <p>
            I am fronend developer with much interest in React framework. I love to Work with JSX elements 
            They have just made out life easier.
          </p>
          <div className='tech-container'>
           {
               techStack.map((item)=>
               <img src={require(`../../Assets/images/tech-stack/${item}.svg`)} />)
           }
          </div>
        </article>
      </div>
    </section>
</>
    )
}

export default Skillsets

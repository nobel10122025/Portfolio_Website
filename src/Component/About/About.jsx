import React from 'react'
import hero from '../../Assets/images/hero.svg';

function About() {
        return (
            <header className="hero">
              <section className="section-center hero-center">
                <article className="hero-info">
                  <div>
                    <div className="underline"></div>
                    <h1>I'm Jaya Durga</h1>
                    <h4>Web developer and Freelancer</h4>
                    
                    <div className="social-links">
                      
                    </div>
                  </div>
            </article>
            <img
              src={hero}
              alt="portfolio"
              className="hero-photo"
              placeholder="blurred"
            />
        </section>
    </header>
    )
}
export default About;

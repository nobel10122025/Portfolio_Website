import React from 'react'
import hero from '../../Assets/images/hero.svg';
import Aims from '../Aims/Aims';
import SocialLinks from './AboutPage.data'

function About() {
        return (
          <>
            <header className="hero">
              <section className="section-center hero-center">
                <article className="hero-info">
                  <div>
                    <div className="underline"></div>
                    <h1>I'm Jaya Durga</h1>
                    <h4>Web developer and Freelancer</h4>
                    <a href='#' className="btn hero-btn">Download my Resume</a>
                    <div className="social-icons hero-icons">
                      {
                        SocialLinks.map((link => {
                          return (
                            <a href={link.url} key={link.id} className="social-link">
                              {link.icon}
                            </a>)}))
                      }
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
    <Aims />
    </>
    )
}
export default About;

import React from 'react'

function Aims() {
    return (
        <div>
            <section className="section bg-grey">
      <div className="section-title">
        <h2>Goals</h2>
        <div className="underline"></div>
      </div>
      <div className="services-center section-center">
        <article className="service">
          <i className="fas fa-code service-icon"></i>
          <h4>Clean Code</h4>
          <div className="underline"></div>
          <p>
          I prefer writing the code which is very intuitive 
          and can be understood very easily by my fellow mates. 
          So that team spirit can be maintained to its fullest.  
          </p>
        </article>
        <article className="service">
          <i className="fas fa-mobile-alt service-icon"></i>
          <h4>Responsive websites</h4>
          <div className="underline"></div>
          <p>
          Making fully responsive websites is one of my prime motives.
          Responsivity is nothing but fitting any devices like mobile 
          and tablets as well. 
          </p>
        </article>
        <article className="service">
          <i className="fas fa-stopwatch service-icon"></i>
          <h4>Punctuality </h4>
          <div className="underline"></div>
          <p>
          I strongly believe that time management is the most important 
          aspect when it comes to satisfying the clients' expectations.
          </p>
        </article>
      </div>
    </section>
        </div>
    )
}

export default Aims

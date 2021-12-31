import React from 'react'
import { AimsData } from './Aims.data'
function Aims() {
    return (
        <div>
            <section className="section bg-grey">
      <div className="section-title">
        <h2>Goals</h2>
        <div className="underline"></div>
      </div>
      <div className="services-center section-center">
        {
          AimsData.map((Aim)=>{
            return(
              <article className="service" key={Aim.id}>
                <i className={`service-icon ${Aim.icon}`}></i>
                <h4>{Aim.name}</h4>
                <div className="underline"></div>
                <p>
                {Aim.details}  
                </p>
              </article>
            )
          })
        }
        
      </div>
    </section>
        </div>
    )
}

export default Aims

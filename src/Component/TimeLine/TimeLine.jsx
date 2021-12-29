import React from 'react'
import { TimeLineData } from './TimeLine.data'
function TimeLine() {
    return (
        <>
             <section class="section timeline">
      <div class="section-title">
        <h2>timeline</h2>
        <div class="underline"></div>
      </div>
      <div class="section-center timeline-center">
          {
              TimeLineData.map((course)=>{
                  return(
                        <article class="timeline-item">
                        <h4>{course.year}</h4>
                        <p>
                           {course.details}
                        </p>
                        <span class="number">
                            {course.Number}
                        </span>
                        </article>
                  )
              })
          }
        
      </div>
    </section>   
        </>
    )
}

export default TimeLine

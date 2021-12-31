import React from 'react'
import { TimeLineData } from './TimeLine.data'
function TimeLine() {
    return (
        <>
        <section className="section timeline">
        <div className="section-title">
            <h2>timeline</h2>
            <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
            {
                TimeLineData.map((course,index)=>{
                    return(
                        <article className="timeline-item" key={index}>
                            <h4>{course.year}</h4>
                            <p>
                            {course.details}
                            </p>
                            <span className="number">
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

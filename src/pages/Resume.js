import React from "react"
import "../styles/Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>PURSUING MY UG </h4>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4></h4>
                <h1>Educational Qualification</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category) {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

               
              </div>
            </div>
            
              

              
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
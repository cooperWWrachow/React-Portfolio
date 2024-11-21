'use client';
import React from 'react'
import NewProject from './projects/NewProject'

const Project = () => {

  const projects = [
    {name: 'Rate My Students', image: "/rms.png", type: "Social Media App", desc: 'Ever heard of "Rate My Professors"? Here, teachers have the ability to leave ratings on their students for all to see!', github: 'https://github.com/cooperWWrachow/Rate-My-Students', live: 'https://www.ratemystudents.xyz/' },
    {name: 'ClimaWear', image: "/climawear.png", type: "Personal Care App", desc: 'With ClimaWear, turn your closet virtual! Gain the ability to be recommended a new outfit every day based on the weather.', github: 'https://github.com/cooperWWrachow/ClimaWear', live: 'https://www.climawear.cloud/' }
  ]

  return (
    <div id='projects'>
        <div className='text-center mb-28 pt-8 mt-14'>
            <h3 className='text-5xl md:text-6xl'>Projects</h3>
        </div>
        <div className='space-y-16'>
          {projects.map((project, index) => (
            <div key={`project-${index}`}>
              <NewProject name={project.name} type={project.type} image={project.image} desc={project.desc} github={project.github} live={project.live} count={index}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Project
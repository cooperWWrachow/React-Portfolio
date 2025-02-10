'use client';
import React from 'react'
import NewProject from './projects/NewProject'
import { motion } from 'framer-motion';

const Project = () => {

  const projects = [
    {name: 'Rate My Students', image: "/rms.png", type: "Social Media App", desc: 'Ever heard of "Rate My Professors"? Here, teachers have the ability to leave ratings on their students for all to see!', github: 'https://github.com/cooperWWrachow/Rate-My-Students', live: 'https://www.ratemystudents.xyz/' },
    {name: 'ClimaWear', image: "/climawear.png", type: "Personal Care App", desc: 'With ClimaWear, turn your closet virtual! Gain the ability to be recommended a new outfit every day based on the weather.', github: 'https://github.com/cooperWWrachow/ClimaWear', live: 'https://www.climawear.cloud/' },
    {name: 'iter8or', image: "/iter8or.png", type: "Scrum Retro App", desc: 'Iter8or revolutionizes the way teams conduct sprint retrospectives. Confidently state what you loved, loathed, longed, and learned with your team members!', github: 'https://github.com/cooperWWrachow/iter8or-GDIT', live: 'https://github.com/cooperWWrachow/iter8or-GDIT' },
  ]

  const isIndexEven = (index: number): boolean => {
    return index % 2 == 0;
  }

  return (
    <div id='projects'>
        <div className='text-center mb-20 pt-8 mt-14'>
            <h3 className='text-5xl md:text-6xl underline decoration-8 underline-offset-[20px] decoration-secondary'>Projects</h3>
        </div>
        <div className='space-y-16'>
          {projects.map((project, index) => (
            <motion.div 
              key={`project-${index}`}
              initial={ isIndexEven(index) ? {opacity: 0, x: -100} : {opacity: 0, x: 100}}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ duration: 1, delay: 0.5, ease: "easeIn"}}
              viewport={{ once: true }}
            >
              <NewProject name={project.name} type={project.type} image={project.image} desc={project.desc} github={project.github} live={project.live} count={index}/>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Project
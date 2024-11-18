import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Intro = () => {
  return (
    <div id='home' className='h-screen flex items-center text-center justify-center flex-col space-y-6'>
        <h3 className='font-thin text-4xl sm:text-5xl md:text-6xl'>Hello, I&apos;m <span className='text-primary'>Cooper</span>.</h3>
        <h3 className='font-thin text-4xl sm:text-5xl md:text-6xl'>I&apos;m a Full-Stack Developer.</h3>
        <a href='#about' className='btn px-10 text-lg sm:text-xl md:text-2xl border-primary border-2 hover:border-primary hover:bg-primary'>Learn More <span><FaArrowDown/></span></a>
    </div>
  )
}

export default Intro
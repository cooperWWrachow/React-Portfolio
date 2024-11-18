import React from 'react'
import Navbar from './Navbar'
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { RiDatabase2Fill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";









const About = () => {
  return (
    <div id='about'>
        <Navbar/>
        <div className='p-16 space-y-20'>
            <div className='text-center'>
                <h3 className='text-6xl'>About</h3>
            </div>
            <div className='grid grid-cols-6 gap-8'>
                <div className='col-span-6 xl:col-span-3 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <div className="avatar">
                            <div className="mask mask-hexagon w-64">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <div className='text-center lg:text-start text-xl pt-10 px-2 sm:px-20'>
                        While attending Louisiana Tech University, I chose to deepen my knowledge in 
                        Computer Science to entertain my passion for problem solving, creativity, and logical interpretation.
                        I design and develop full-stack web application with two main goals: Performance and Usability. I take 
                        pride in my work and contributing my skills to the best of my ability.
                    </div>
                </div>
                <div className='col-span-6 xl:col-span-3 flex items-center justify-center gap-6'>
                    <div className='flex flex-col gap-5'>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><BiLogoTypescript/></span>
                            <span className='text-sm'>TypeScript</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><RiNextjsFill/></span>
                            <span className='text-sm'>Next.js</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><RiTailwindCssFill/></span>
                            <span className='text-sm'>Tailwind CSS</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><SiPrisma/></span>
                            <span className='text-sm'>Prisma ORM</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><RiDatabase2Fill/></span>
                            <span className='text-sm'>MySQL</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><FaReact/></span>
                            <span className='text-sm'>React</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><FaJava/></span>
                            <span className='text-sm'>Java</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><FaAngular/></span>
                            <span className='text-sm'>Angular</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><FaNodeJs/></span>
                            <span className='text-sm'>Node.js</span>
                        </div>
                        <div className='border-2 border-primary flex flex-col py-1 px-10 items-center justify-center'>
                            <span className='text-7xl'><FaAws/></span>
                            <span className='text-sm'>AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About
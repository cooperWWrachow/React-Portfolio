'use client';
import React from 'react'
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
        <div className='p-8 md:px-16 mt-14'>
            <div className='text-center mb-28'>
                <h3 className='text-5xl md:text-6xl'>About</h3>
            </div>
            <div className='grid grid-cols-6 gap-8'>
                <div className='col-span-6 xl:col-span-3 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <div className="avatar">
                            <div className="mask mask-squircle w-56 sm:w-60 md:w-64">
                                <img src="/coop.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='text-center lg:text-start text-xl pt-10 w-full sm:w-4/5'>
                        While attending Louisiana Tech University, I chose to deepen my knowledge in 
                        Computer Science to entertain my passion for problem solving, creativity, and logical interpretation.
                        I design and develop full-stack web applications with two main goals: Performance and Usability. I take 
                        pride in my work and contributing my skills to the best of my ability.
                    </div>
                </div>

                <div className='col-span-6 xl:col-span-3 flex items-center justify-center gap-4 sm:gap-6'>
                    <div className='flex flex-col gap-5'>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><BiLogoTypescript/></span>
                            <span className='text-xs sm:text-sm'>TypeScript</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><RiNextjsFill/></span>
                            <span className='text-xs sm:text-sm'>Next.js</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><FaAws/></span>
                            <span className='text-xs sm:text-sm'>AWS</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><SiPrisma/></span>
                            <span className='text-xs sm:text-sm'>Prisma</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><RiDatabase2Fill/></span>
                            <span className='text-xs sm:text-sm'>MySQL</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><FaReact/></span>
                            <span className='text-xs sm:text-sm'>React</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><FaJava/></span>
                            <span className='text-xs sm:text-sm'>Java</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><FaAngular/></span>
                            <span className='text-xs sm:text-sm'>Angular</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><FaNodeJs/></span>
                            <span className='text-xs sm:text-sm'>Node.js</span>
                        </div>
                        <div className='border-2 border-primary rounded-xl flex flex-col py-1 w-24 sm:w-32 md:w-full px-3 sm:px-5 md:px-10 items-center justify-center'>
                            <span className='text-4xl sm:text-6xl md:text-7xl'><RiTailwindCssFill/></span>
                            <span className='text-xs sm:text-sm'>Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About
'use client'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaAngleDoubleUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer bg-base-300 footer-center relative p-10'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <a href="#home" className='p-1 bg-base-300 border-primary border-2 text-3xl hover:bg-primary'><FaAngleDoubleUp/></a>
        </div>
        <nav>
            <div className='grid grid-flow-col gap-6 mt-4'>
                <a href="https://github.com/cooperWWrachow" target="_blank" rel="noopener noreferrer" className='text-5xl'>
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/cooper-rachow/" target="_blank" rel="noopener noreferrer" className='text-5xl'>
                    <FaLinkedin/>
                </a>
            </div>
        </nav>
        <aside>
            <p className='text-xl'><span className='text-primary'>Cooper Rachow</span> &copy; 2024-{new Date().getFullYear()}</p>
        </aside>
    </footer>
  )
}

export default Footer
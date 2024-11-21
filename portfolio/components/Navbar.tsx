'use client'
import React, { useEffect, useState } from 'react'


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];

      // Loop through sections and determine the currently visible section
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const { top, bottom } = element.getBoundingClientRect();
        return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar bg-base-300 bg-opacity-95 z-50 shadow-lg sticky top-0 flex items-center justify-center lg:items-end lg:justify-end md:pr-14">
        <div className="flex-none">
            <ul className="menu menu-horizontal">
                <li><a className={`text-lg sm:text-2xl ${activeSection == 'home' && 'text-primary'}`} href='#home'>Home</a></li>
                <li><a className={`text-lg sm:text-2xl ${activeSection == 'about' && 'text-primary'}`} href='#about'>About</a></li>
                <li><a className={`text-lg sm:text-2xl ${activeSection == 'projects' && 'text-primary'}`} href='#projects'>Projects</a></li>
                <li><a className={`text-lg sm:text-2xl ${activeSection == 'contact' && 'text-primary'}`} href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
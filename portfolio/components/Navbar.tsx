import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-lg flex items-center justify-center lg:items-end lg:justify-end md:pr-14">
        <div className="flex-none">
            <ul className="menu menu-horizontal gap-3">
                <li><a className='text-2xl' href='#home'>Home</a></li>
                <li><a className='text-2xl' href='#about'>About</a></li>
                <li><a className='text-2xl' href='#projects'>Projects</a></li>
                <li><a className='text-2xl' href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
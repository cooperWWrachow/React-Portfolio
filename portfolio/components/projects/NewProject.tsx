'use client';
import React from 'react'


interface ProjectProps {
    name: string
    image: string
    type: string
    desc: string
    github: string
    live: string
    count: number
}

const NewProject = ({name, image, type, desc, github, live, count}: ProjectProps) => {
    let order;
    if (count % 2 == 0){
        order = true
    } else {
        order = false
    }
    return (
        <>
            <div className={`grid grid-cols-12 gap-5`}>
                <div className={`col-span-11 lg:col-span-7 bg-secondary hover:bg-primary ${order ? 'order-2 lg:order-1' : 'order-2 col-start-2 '}`}>
                    <div className={`${order ? 'pr-2 sm:pr-4 md:pr-7 lg:pr-10 xl:pr-12' : 'pl-4 sm:pl-4 md:pl-7 lg:pl-10 xl:pl-12'} py-2 sm:py-4 md:py-7 lg:py-10 xl:py-12`}>
                        <img src={image} alt=""/>
                    </div>
                </div>
                <div className={`col-span-12 lg:col-span-5 flex flex-col space-y-4 xl:space-y-8 p-5 ${order ? 'order-1 lg:order-2 text-start items-start' : 'order-1 text-end items-end'}`}>
                    <div className='space-y-2'>
                        <h3 className='text-4xl lg:text-3xl xl:text-5xl font-bold'>{name}</h3>
                        <h5 className='text-3xl lg:text-2xl xl:text-3xl '>{type}</h5>
                    </div>
                    <div className={`w-5/6 sm:w-4/5 md:w-1/2 lg:w-full xl:w-4/5 ${order ? 'text-start' : 'text-end'}`}>
                        <span className='text-lg'>{desc}</span>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <a href={live} className='text-lg sm:text-xl md:text-2xl underline underline-offset-8 decoration-primary hover:text-primary tracking-widest' target="_blank" rel="noopener noreferrer">LIVE APP</a>
                        <a href={github} className='text-lg sm:text-xl md:text-2xl underline underline-offset-8 decoration-primary hover:text-primary tracking-widest' target="_blank" rel="noopener noreferrer">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default NewProject
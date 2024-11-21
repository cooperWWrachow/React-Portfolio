'use client';
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='pb-16 px-4 sm:px-8 md:px-16 mt-10 w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-2/5'>
        <div className='text-center mb-28 pt-8 mt-14'>
            <h3 className='text-5xl md:text-6xl'>Contact</h3>
        </div>
        <div className='mb-10'>
            <span className='text-lg tracking-wider'>If you have any questions, feel free to reach out! Just leave your name and email and 
                I will get back to you as soon as possible.
            </span>
        </div>
        <div>
            <form action="" className='flex flex-col'>
                <div className='flex flex-col space-y-2 mb-3 w-full'>
                    <input type="text" className='input input-bordered text-lg bg-base-200' placeholder='Name'/>
                    <input type="text" className='input input-bordered text-lg bg-base-200' placeholder='Email'/>
                    <textarea className='textarea input-bordered resize-none min-h-32 text-lg bg-base-200' placeholder='Message'></textarea>
                </div>
                <button type='submit' className='btn text-lg border-primary bg-base-300 hover:border-primary hover:bg-primary'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
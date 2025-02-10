'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [toast, setToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const removeToast = () => {
        setTimeout(() => {
            setError(false);
            setToastMessage('')
            setToast(false)
        }, 2000)        
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setMessage('')

        setIsLoading(true)

        if (name == '' || email == '' || message == ''){
            setIsLoading(false)
            setError(true)
            setToastMessage("Error: All fields required.")
            setToast(true)
            removeToast();
            return
        }

        const bodyData = {
            action: 'sendEmail', name, email, message,
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        });

        const result = await response.json();
        
        if (result.success) {
            setIsLoading(false)
            setToastMessage('Success! Email sent successfully.')
            setToast(true)
            removeToast();
        } else {
            setIsLoading(false)
            setError(true)
            setToastMessage('Error! Something went wrong.')
            setToast(true)
            removeToast()
        }
    }

    return (
        <>
            {toast && (
                <div className="toast z-50">
                    <div className={`alert ${error ? 'alert-error' : 'alert-success'}`}>
                        <span className='text-lg'>{toastMessage}</span>
                    </div>
                </div>
            )}

            <motion.div 
                id='contact' className='pb-16 pt-8 px-4 sm:px-8 md:px-16 mt-10 w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-2/5'
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className='text-center mb-20 mt-14'>
                    <motion.h3 
                        className='text-5xl md:text-6xl underline decoration-8 underline-offset-[20px] decoration-secondary'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Contact
                    </motion.h3>
                </div>
                <motion.div 
                    className='mb-10'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <span className='text-lg tracking-wider'>If you have any questions, feel free to reach out! Just leave your name and email and 
                        I will get back to you as soon as possible.
                    </span>
                </motion.div>
                <div>
                    <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='flex flex-col space-y-2 mb-3 w-full'>
                            <motion.input 
                                type="text" className='input input-bordered text-lg bg-base-200' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            />
                            <motion.input 
                                type="text" className='input input-bordered text-lg bg-base-200' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            />
                            <motion.textarea 
                                className='textarea input-bordered resize-none min-h-32 text-lg bg-base-200' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            ></motion.textarea>
                        </div>
                        {isLoading ? (
                            <button className='btn border-primary bg-base-300'>
                                <span className="loading loading-infinity loading-lg"></span>
                            </button>
                        ) : (
                            <motion.button 
                                type='submit' className='btn text-lg border-primary bg-base-300 hover:border-primary hover:bg-primary'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >   
                                Submit
                            </motion.button>
                        )}
                    </form>
                </div>
            </motion.div>
        </>
        
    )
}

export default Contact
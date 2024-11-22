'use client';
import React, { useState } from 'react'

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

            <div id='contact' className='pb-16 pt-8 px-4 sm:px-8 md:px-16 mt-10 w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-2/5'>
                <div className='text-center mb-20 mt-14'>
                    <h3 className='text-5xl md:text-6xl underline decoration-8 underline-offset-[20px] decoration-secondary'>Contact</h3>
                </div>
                <div className='mb-10'>
                    <span className='text-lg tracking-wider'>If you have any questions, feel free to reach out! Just leave your name and email and 
                        I will get back to you as soon as possible.
                    </span>
                </div>
                <div>
                    <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='flex flex-col space-y-2 mb-3 w-full'>
                            <input type="text" className='input input-bordered text-lg bg-base-200' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="text" className='input input-bordered text-lg bg-base-200' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <textarea className='textarea input-bordered resize-none min-h-32 text-lg bg-base-200' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        {isLoading ? (
                            <button className='btn border-primary bg-base-300'>
                                <span className="loading loading-infinity loading-lg"></span>
                            </button>
                        ) : (
                            <button type='submit' className='btn text-lg border-primary bg-base-300 hover:border-primary hover:bg-primary'>
                                Submit
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default Contact
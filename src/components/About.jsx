import React from 'react'

function About() {
    return (
        <>
            <section className='flex justify-center items-center py-8 '>
                <div className='text-center w-[26rem]'>
                    <p className='capitalize'>
                        <span className='border-r-2 pr-3'>youtube Content</span>
                        <span className='border-r-2 px-3'>Creative Development</span>
                        <span className='pl-3'>Branding</span>
                    </p>
                    <h1 className='text-3xl py-5 font-bold'>About Arcanum Productions</h1>
                    <p>
                        At Arcanum Productions, we are passionate about empowering creators to achieve their full potential on YouTube. Our team specializes in creative development, branding, and content strategy to help individuals and businesses thrive in the digital landscape. <br />
                        <span className='text-red-600'>Get in touch</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default About
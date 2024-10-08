import React from 'react';
import details from '../../data/details';

function HeroSection() {
  return (
    <main className='h-screen pt-[90px]'>
      <div className='bg h-full relative'>
        {/* Use an iframe to embed the YouTube video */}
        <iframe
          src="https://www.youtube.com/embed/eRMQ0K_w-jw?si=K0FWjYU92sXi4o78&autoplay=1&mute=1&loop=1&playlist=eRMQ0K_w-jw&controls=0&disablekb=1&modestbranding=1&showinfo=0&fs=0"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='h-full w-full object-cover'
        ></iframe>
      </div>
      <div className='video-overlay absolute bottom-5 md:left-32 left-5 text-white md:w-[500px] w-[250px] flex flex-col gap-3'>
        <p className='md:text-lg'>Empower Your YouTube Career</p>
        <h1 className='font-bold md:text-5xl text-3xl'>{details.companyName}</h1>
        <p className='text-sm'>{details.desc}</p>
      </div>
    </main>
  );
}

export default HeroSection;
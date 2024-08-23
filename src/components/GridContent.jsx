import React from 'react'
import userImg from "../assets/user.webp"
import previewVideo from '../assets/preview.mp4';

function GridContent() {
  return (
      <>
          <div className='flex justify-between px-5  pt-[8.75rem]'>
              <div className='flex flex-col justify-center items-center'>
                   <img  className="w-96 h-96" src={userImg} alt="" />
                  <h1 className='text-5xl uppercase font-bold text-center'>Nishant Agrawal</h1>
              </div>
              <div>
                  <video src={previewVideo} autoPlay muted loop className='h-96 w-96 object-cover'></video>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <img className='w-96 h-96'  src={userImg} alt="" />
              <h1 className='text-5xl uppercase font-bold text-center'>Sejal</h1>
              </div>
          </div>
      </>
  )
}

export default GridContent
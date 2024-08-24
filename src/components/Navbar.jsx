import React, { useState } from 'react'
import details from '../../data/details'

function Navbar() {
  const [hamOpen, setHamOpen] = useState(false)
  const handleOpenHam = () => {
    setHamOpen(!hamOpen)
  }
  return (
    <header className='text-white fixed top-0 z-10 w-full'>
      <nav className='bg-[#282828] flex justify-between pl-10 pr-10 py-8 items-center'>
        <div className='Logo'>{details.companyName}</div>
        <div className='nav-items md:block hidden '>
          <ul className='list-none flex gap-5'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Catalog</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Plans & Pricing</a></li>
            {/* <li>icon</li> */}
          </ul>
        </div>
        <div className='hamburger md:hidden flex items-center justify-center  '>

          {hamOpen ?


            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 ease-in-out duration-300' viewBox="0 0 384 512"><path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" onClick={handleOpenHam} /></svg>

            :

            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 ease-in-out duration-300' viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" onClick={handleOpenHam} /></svg>}
        </div>


      </nav>
      {console.log(hamOpen)
      }
      {hamOpen ?
        <div className="mobilenav bg-[#282828] flex justify-between p-4 items-center mt-1 ease-in-out duration-300">
          <div className='nav-items block '>
            <ul className='list-none flex flex-col gap-5'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Catalog</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Portfolio</a></li>
              <li><a href='#'>Plans & Pricing</a></li>

            </ul>
          </div>
        </div> : ""}
    </header>

  )
}

export default Navbar
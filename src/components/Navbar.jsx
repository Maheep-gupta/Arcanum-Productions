import React from 'react'
import details from '../../data/details'

function Navbar() {
  return (
    <header className='text-white fixed top-0 z-10 w-full'>
    <nav className='bg-[#282828] flex justify-between pl-10 pr-10 py-8 '>
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
        <div className='hamburger md:hidden '>=</div>
    </nav>
</header>
  )
}

export default Navbar
import React from 'react'
import github from '../assets/images/Github.svg'
import linkdien from '../assets/images/Vector.svg'
import Header from './Header'

const Navbar = () => {
  return (
    <>
    <div className='h-screen border-b border-99'>
      <div className='lg:px-24 px-5 lg:py-8 py-5 flex justify-between items-center text-900 border-b border-99'>
        <h1 className='font-dm sm:text-3xl text-lg '>Shubham Kumari</h1>
        <div className='font-mon hidden lg:flex gap-8 text-base font-medium items-center'>
          <a className='px-4 py-2 border-b border-transparent hover:text-secondary hover:border-secondary' href="">Home</a>
          <a className='px-4 py-2 border-b border-transparent hover:text-secondary hover:border-secondary' href="">Resume</a>
          <a className='px-4 py-2 border-b border-transparent hover:text-secondary hover:border-secondary' href="">Get In Touch</a>
        </div>
        <div className='flex gap-4 items-center'>
          <img src={github} alt="GitHub" />
          <img src={linkdien} alt="LinkedIn" />
        </div>
      </div>
      <Header />
      </div>
    </>
  )
}

export default Navbar

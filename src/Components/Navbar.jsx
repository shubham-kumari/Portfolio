import React from 'react'
import github from '../assets/images/Github.svg'
import linkdien from '../assets/images/Vector.svg'
import Header from './Header'

const Navbar = () => {
  return (
    <>
    <div className='h-screen border-b border-99'>
      <div className='px-24 py-8 flex justify-between items-center text-900 border-b border-99'>
        <h1 className='font-dm text-3xl '>Shubham Kumari</h1>
        <div className='font-mon flex gap-8 text-base font-medium items-center'>
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

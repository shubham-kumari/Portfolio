import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuCircleEqual } from "react-icons/lu";
import github from '../assets/images/Github.svg';
import linkedin from '../assets/images/Vector.svg';
import github1 from '../assets/images/Github (2).svg';
import linkedin1 from '../assets/images/Vector (1).svg';
import Header from './Header';


const menu = [
  {
    menuName: 'Home',
    path: '#home'
  },
  {
    menuName: 'Resume',
    path: '#resume'
  },
  {
    menuName: 'About',
    path: '#about'
  },
  
];

const Navbar = () => {

  


  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className='border-b border-99 text-900 font-mon text-base font-medium h-screen' id='home'>
        <div className='lg:px-24 px-5 lg:py-8 py-5 flex justify-between items-center border-b border-99'>
          <h1 className='font-dm sm:text-3xl text-lg'>Shubham Kumari</h1>
          <div className='hidden lg:flex gap-8 items-center'>
            {menu.map((e, index) => (
              <a
                key={index}
                href={e.path}
                onClick={(ev) => handleSmoothScroll(ev, e.path)}
                className='px-4 py-2 border-b border-transparent hover:text-secondary hover:border-secondary'
              > 
                {e.menuName}
              </a>
            ))}
            <a className='px-4 py-2 border-b border-transparent hover:text-secondary hover:border-secondary' href="mailto:kumarishubham273@gmail.com">Get In Touch</a>
          </div>
          <div className='lg:flex hidden gap-4 items-center'>
            <a href="https://github.com/shubham-kumari" target='_blank'><img className=' cursor-pointer' src={github} alt="GitHub" /></a>

            <a href="https://www.linkedin.com/in/shubham-kumari/" target='_blank'><img className=' cursor-pointer' src={linkedin} alt="LinkedIn" /></a>
          </div>
          <button onClick={toggleNavbar} className='lg:hidden'>
            <LuCircleEqual className='text-2xl' />
          </button>
        </div>

        {isOpen && <div className="fixed inset-0 bg-900 bg-opacity-50 z-50" onClick={toggleNavbar}></div>}

        <div className={`fixed inset-x-0 top-0 z-50 w-full lg:hidden transform  ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}>
          <div className='lg:hidden flex flex-col items-center bg-900 text-primary py-5 px-5 gap-2 rounded-b-xl'>
            {menu.map((e, index) => (
              <a
                key={index}
                href={e.path}
                onClick={(ev) => handleSmoothScroll(ev, e.path)}
                className='px-5 py-4 text-white hover:text-secondary'
              >
                {e.menuName}
              </a>
            ))}
            <a className='px-5 py-4 text-white hover:text-secondary' href="mailto:kumarishubham273@gmail.com" target='_blank'>Get In Touch</a>
            <div className='flex gap-4 items-center mt-4'>
              <a href="https://github.com/shubham-kumari" target='_blank'><img className=' cursor-pointer' src={github1} alt="GitHub" /></a>

              <a href="https://www.linkedin.com/in/shubham-kumari/" target='_blank'><img className=' cursor-pointer' src={linkedin1} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        <Header />
      </div>
    </>
  );
};

export default Navbar;

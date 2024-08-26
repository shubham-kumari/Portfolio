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
    path: '/'
  },
  {
    menuName: 'Resume',
    path: '/resume'
  },
  {
    menuName: 'About',
    path: '/#about'
  },
  {
    menuName: 'Get In Touch',
    path: '/contact'
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='border-b border-99 text-900 font-mon text-base font-medium '>
        <div className='lg:px-24 px-5 lg:py-8 py-5 flex justify-between items-center '>
          <h1 className='font-dm sm:text-3xl text-lg'>Shubham Kumari</h1>
          <div className='hidden lg:flex gap-8  items-center'>
            {menu.map((e, index) => (
              <Link
                key={index}
                to={e.path}
                className='px-4 py-2 border-b border-transparent hover:text-secondary hover:border-secondary'
              >
                {e.menuName}
              </Link>
            ))}
          </div>
          <div className='lg:flex hidden gap-4 items-center'>
            <img src={github} alt="GitHub" />
            <img src={linkedin} alt="LinkedIn" />
          </div>

          <button onClick={toggleNavbar} className='lg:hidden'>
            <LuCircleEqual className='text-2xl' />
          </button>
        </div>

        {isOpen && <div className="fixed inset-0 bg-900 bg-opacity-50 z-50" onClick={toggleNavbar}></div>}
        
        <div className={`fixed inset-x-0 top-0 z-50 w-full lg:hidden transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
          <div className='lg:hidden flex flex-col items-center bg-900 text-primary py-5 px-5 gap-2'>
            {menu.map((e, index) => (
              <Link
                key={index}
                to={e.path}
                onClick={toggleNavbar}
                className='px-5 py-4  text-white hover:text-secondary'
              >
                {e.menuName}
              </Link>
            ))}
            <div className='flex gap-4 items-center mt-4'>
              <img src={github1} alt="GitHub" />
              <img src={linkedin1} alt="LinkedIn" />
            </div>
          </div>
        </div>

        <Header />
      </div>
    </>
  );
};

export default Navbar;

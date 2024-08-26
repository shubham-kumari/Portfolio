import React from 'react'
import github from '../assets/images/Github (2).svg'
import linkedin from '../assets/images/Vector (1).svg'
import { ImGithub } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <>
      <div className='flex sm:flex-row flex-col lg:px-24 px-5 py-8 justify-between items-start gap-4 self-stretch bg-900 font-mon font-medium text-primary text-base'>
        <a href="mailto:kumarishubham273@gmail.com" className=' cursor-pointer hover:text-secondary'>Kumarishubham273@gmail.com</a>
        <div className='flex gap-4 items-center'>
          <a href="https://github.com/shubham-kumari" target='_blank'><img className=' cursor-pointer' src={github} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/shubham-kumari/" target='_blank'><img className=' cursor-pointer' src={linkedin} alt="LinkedIn" /></a>
          
          
          {/* <RiGithubLine className='text-primary text-2xl hover:text-secondary cursor-pointer border-2 rounded-full' /> */}
          {/* <SlSocialLinkedin className='text-primary text-2xl hover:text-secondary cursor-pointer border-2 rounded-s' /> */}


        </div>
        <p className='text-secondary'>©2024 Shubham Kumari</p>
      </div>
    </>
  )
}

export default Footer

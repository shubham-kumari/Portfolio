import React from 'react'
import github from '../assets/images/Github (2).svg'
import linkedin from '../assets/images/Vector (1).svg'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col lg:px-24 px-5 py-8 justify-center items-start gap-4 self-stretch bg-900 font-mon font-medium text-primary text-base'>
        <p>kumarishubham273@gmail.com</p>
        <div className='flex gap-4 items-center'>
          <img src={github} alt="GitHub" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
        <p>©2024 Shubham Kumari</p>
      </div>
    </>
  )
}

export default Footer

import React from 'react'
import star1 from '../assets/images/Star 1.svg'
import star2 from '../assets/images/Star 2.svg'

const Thank = () => {
  return (
    <>
      <div className='flex sm:py-44 py-28 justify-center items-center font-dm text-900 self-stretch px-5'>
        <div className='flex  flex-col justify-center items-center sm:w-[830px] w-full'>
          <div className='flex items-end self-stretch'>
            <div className='flex items-start flex-1 self-stretch'>
              <img className='sm:h-auto h-5'  src={star1} alt="Star" />
              <div className='flex  justify-center items-center gap-2 flex-1 self-stretch'>
                <p className='sm:text-[144px] text-[57px] leading-tight'>Thank You.</p>
              </div>
            </div>
            <img className='sm:h-auto h-5' src={star2} alt="Star" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Thank

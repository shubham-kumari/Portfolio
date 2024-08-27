import React from 'react'
import star1 from '../assets/images/Star 1.svg'
import star2 from '../assets/images/Star 2.svg'
import circle from '../assets/images/Ellipse 2.svg'

const Header = () => {
  return (
    <>
    <div className=' text-900 font-mon font-medium sm:text-base text-xs flex flex-col items-center justify-center self-stretch h-full'>
        <div className='flex justify-center items-end gap-2 '>
            <div className='flex pt-1 items-start sm:gap-3 gap-2 self-stretch'>
                <img className='sm:h-auto h-5' src={star1} alt="Star" />
                <div className='flex flex-col items-center sm:gap-3 gap-4'>
                    <div className='flex flex-col items-center sm:gap-0 gap-2'>
                        <div className='flex sm:pr-14 pr-6 justify-center items-center self-stretch'>
                            <p className=' text-start w-full'>Shubham Kumari</p>
                            <img className='sm:h-auto h-2' src={circle} alt="Circle" />
                        </div>
                        <h1 className=' text-center font-dm sm:text-[144px] text-7xl font-normal sm:leading-[120px] leading-10'>Portfolio</h1>
                    </div>
                    <p className='w-full text-end '>UI/UX Designer | Frontend Developer</p>
                </div>
            </div>
            <img className='pb-1  sm:h-auto h-5' src={star2} alt="Star" />
        </div>
    </div>
    </>
  )
}

export default Header
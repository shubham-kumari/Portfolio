import React from 'react'
import star1 from '../assets/images/Star 1.svg'
import star2 from '../assets/images/Star 2.svg'
import circle from '../assets/images/Ellipse 2.svg'

const Header = () => {
  return (
    <>
    <div className='text-900 font-mon font-medium text-base flex flex-col items-center justify-center self-stretch h-screen '>
        <div className='flex justify-center items-end gap-2 '>
            <div className='flex pt-1 items-start gap-3 self-stretch'>
                <img src={star1} alt="Star" />
                <div className='flex flex-col items-center gap-3'>
                    <div className='flex flex-col items-center'>
                        <div className='flex pr-14 justify-center items-center self-stretch'>
                            <p className=' text-start w-full'>Shubham Kumari</p>
                            <img src={circle} alt="Circle" />
                        </div>
                        <h1 className=' text-center font-dm text-[144px] font-normal leading-[120px]'>Portfolio</h1>
                    </div>
                    <p className='w-full text-end '>UI/UX Designer | Frontend Developer</p>
                </div>
            </div>
            <img className='pb-1' src={star2} alt="Star" />
        </div>
    </div>
    </>
  )
}

export default Header
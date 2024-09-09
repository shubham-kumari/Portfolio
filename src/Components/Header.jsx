import React from 'react'
import star1 from '../assets/images/Star 1.svg'
import star2 from '../assets/images/Star 2.svg'
import circle from '../assets/images/Ellipse 2.svg'
import { useInView } from 'react-intersection-observer';


const Header = () => {
    const { ref: leftRef, inView: leftInView } = useInView({
        threshold: 0.1,
        triggerOnce: false, // Ensure it triggers every time the element comes into view
    });

    const { ref: rightRef, inView: rightInView } = useInView({
        threshold: 0.1,
        triggerOnce: false, // Ensure it triggers every time the element comes into view
    });

    return (
        <>
            <div className=' text-900 font-mon font-medium sm:text-base text-xs flex flex-col items-center justify-center self-stretch w-full h-full'>
                <div className='flex justify-center items-end gap-2 '>
                    <div className='flex pt-1 items-start sm:gap-3 gap-2 self-stretch'>
                        <img ref={leftRef} className={`sm:h-auto h-5 ${leftInView ? 'animate-slideInFromLeft' : '-translate-x-10 opacity-0'
                            }`} src={star1} alt="Star" />
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
                    <img ref={rightRef} className={`pb-1  sm:h-auto h-5  ${rightInView ? 'animate-slideInFromRight' : 'translate-x-10 opacity-0'
                        }`} src={star2} alt="Star" />
                </div>
            </div>
        </>
    )
}

export default Header
import React from 'react';
import star1 from '../assets/images/Star 1.svg';
import star2 from '../assets/images/Star 2.svg';
import { useInView } from 'react-intersection-observer';

const Thank = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Ensure it triggers every time the element comes into view
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Ensure it triggers every time the element comes into view
  });

  return (
    <div className='flex sm:py-44 py-24 justify-center items-center font-dm text-900 self-stretch px-5'>
      <div className='flex flex-col justify-center items-center sm:w-[830px] w-full'>
        <div className='flex items-end self-stretch'>
          <div className='flex items-start flex-1 self-stretch'>
            <img
              ref={leftRef}
              className={`sm:h-auto h-5 transition-transform transition-opacity duration-1000 ${
                leftInView ? 'animate-slideInFromLeft' : '-translate-x-10 opacity-0'
              }`}
              src={star1}
              alt="Star"
            />
            <div className='flex justify-center items-center gap-2 flex-1 self-stretch'>
              <p className='sm:text-[144px] text-[57px] leading-tight'>Thank You.</p>
            </div>
          </div>
          <img
            ref={rightRef}
            className={`sm:h-auto h-5 transition-transform transition-opacity duration-1000 ${
              rightInView ? 'animate-slideInFromRight' : 'translate-x-10 opacity-0'
            }`}
            src={star2}
            alt="Star"
          />
        </div>
      </div>
    </div>
  );
};

export default Thank;

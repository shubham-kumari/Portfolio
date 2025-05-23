import React from 'react';
import figma from '../assets/images/Frame 3.svg';
import react from '../assets/images/Frame 7.svg';
import tailwind from '../assets/images/Tailwind Css.svg';
import photoshop from '../assets/images/Photoshop.svg';
import illustrator from '../assets/images/Illustrator.svg';
import star1 from '../assets/images/Group 1.svg';
import star2 from '../assets/images/Group 2.svg';
import profile from '../assets/images/profile3.jpg';
import { useInView } from 'react-intersection-observer';

const data = [
    {
        image: figma,
        text: 'Figma'
    },
    {
        image: react,
        text: 'React'
    },
    {
        image: tailwind,
        text: 'Tailwind CSS'
    },
    {
        image: photoshop,
        text: 'Photoshop'
    },
    {
        image: illustrator,
        text: 'Illustrator'
    },
];

const About = () => {
    const { ref: leftRef, inView: leftInView } = useInView({
        threshold: 0.1,
    });

    const { ref: rightRef, inView: rightInView } = useInView({
        threshold: 0.1,
    });

    return (
        <div
            className={`lg:px-40 px-5 py-8 text-900 font-mon font-medium sm:text-base text-sm flex lg:flex-row flex-col items-center justify-center sm:gap-16 gap-2 lg:h-screen border-b border-99`}
            id="about"
        >
            <div
                ref={leftRef}
                className={`flex flex-1 flex-col sm:gap-0 gap-2 transition-transform duration-1000 ease-in-out  ${leftInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
                <h1 className='font-dm sm:text-8xl text-5xl '>Hello,</h1>
                <div className='flex flex-col sm:py-8 py-4 items-start sm:gap-8 gap-5 self-stretch'>
                    <p className=' leading-8'>
                    {/* My name is Shubham Kumari, a UI/UX designer and frontend web developer who’s passionate about turning ideas into beautiful and functional digital experiences. During my time as a UI/UX intern at Pixel Bharat, I’ve worked on transforming creative ideas into designs that are both engaging and user-friendly. In my work, I utilize programs such as: */}
                    I’m Shubham - a UI/UX designer creating clean, intuitive experiences that put users first.
                    I blend design systems, user research, and meaningful flows to build interfaces that feel effortless and human. Inspired by nature and thoughtful conversations, I believe great design should not just look good - it should feel right.
                    </p>
                    {/* <div className='flex flex-wrap items-center self-stretch sm:gap-8 gap-4'>
                        {data.map((e, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <img className='fill-secondary' src={e.image} alt={e.text} />
                                <p>{e.text}</p>
                            </div>
                        ))}
                    </div> */}
                    {/* <p>
                        At the Department of Holistic Education, I focused on blending design with functionality using ReactJS and Tailwind CSS, working on projects like <span className='font-bold'>Car Information Portal</span>, <span className='font-bold'>VB-ITR Website</span>, <span className='font-bold'>Skillzyy</span>, and <span className='font-bold'>Bookster</span>.
                    </p> */}
                </div>
            </div>
            <div
                ref={rightRef}
                className={`flex flex-col items-start justify-center sm:gap-2 gap-0 sm:w-[450px] w-80 transition-transform duration-1000 ease-in-out ${rightInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
                <img src={star1} alt="Star 1" className='sm:w-16 h-auto w-10 transition-transform duration-1000 ease-in-out transform hover:scale-110' />
                <div className='flex flex-col items-end justify-end sm:gap-2 gap-0 self-stretch sm:px-0 px-0'>
                    <div className='flex flex-col justify-center items-center gap-12 self-stretch'>
                        <img className='w-auto sm:w-[360px] sm:h-auto h-[320px] rounded-2xl border-[12px] border-900 transition-transform duration-1000 ease-in-out transform hover:scale-105' src={profile} alt="Profile" />
                    </div>
                    <img src={star2} alt="Star 2" className='sm:w-16 w-10 h-auto transition-transform duration-1000 ease-in-out transform hover:scale-110' />
                </div>
            </div>
        </div>
    );
}

export default About;

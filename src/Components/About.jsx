import React from 'react'
import figma from '../assets/images/Frame 3.svg'
import react from '../assets/images/Frame 7.svg'
import tailwind from '../assets/images/Tailwind Css.svg'
import photoshop from '../assets/images/Photoshop.svg'
import illustrator from '../assets/images/Illustrator.svg'
import star1 from '../assets/images/Group 1.svg'
import star2 from '../assets/images/Group 2.svg'
import profile from '../assets/images/profile.jpg'

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
]

const About = () => {
    return (
        <>
            <div className='text-900 font-mon font-medium text-base px-24 flex gap-12 items-center justify-center'>
                <div className='flex-1'>
                    <h1 className='font-dm text-8xl'>About</h1>
                    <div className='flex flex-col py-8 items-start gap-8'>
                        <p>Hello! My name is Shubham Kumari, a UI/UX designer and frontend web developer who’s passionate about turning ideas into beautiful and functional digital experiences. During my time as a UI/UX intern at Pixel Bharat, I’ve worked on transforming creative ideas into designs that are both engaging and user-friendly. In my work, I utilize programs such as:</p>
                        <div className='flex flex-wrap gap-8'>
                            {data.map((e, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <img src={e.image} alt={e.text} />
                                    <p>{e.text}</p>
                                </div>
                            ))}
                        </div>
                        <p>At the Department of Holistic Education, I focused on blending design with functionality using ReactJS and Tailwind CSS, working on projects like Car Information Portal, VB-ITR Website, Skillzyy, and Bookster.</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2 w-96'>
                    <img src={star1} alt="Star 1" className='w-16 h-auto' />
                    <div className='flex flex-col items-end justify-end gap-2 self-stretch'>
                        <img className='h-96 w-auto rounded-2xl border-[12px] border-900' src={profile} alt="Profile" />
                        <img src={star2} alt="Star 2" className='w-16 h-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

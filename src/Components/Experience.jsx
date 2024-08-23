import React from 'react'
import circle from '../assets/images/Ellipse 2.svg'
import dashboard from "../assets/images/Dashboard.svg"
import edit from "../assets/images/Edit.svg"
import painting from '../assets/images/Painting.svg'
import responsive from '../assets/images/Responsive.svg'
import stack from '../assets/images/Stack.svg'
import group from '../assets/images/Group.svg'

const data = [
    {
        icon: painting,
        text: 'Designing complex web and mobile interfaces.'
    },
    {
        icon: responsive,
        text: 'Adaptive design.'
    },
    {
        icon: dashboard,
        text: 'Creating wireframes, prototypes.'
    },
    {
        icon: stack,
        text: 'Creating and maintaining design systems.'
    },
    {
        icon: group,
        text: 'Working closely with developers and ensuring successful implementation through testing.'
    },
    {
        icon: edit,
        text: 'Redesigning or improving designs.'
    },
]

const Experience = () => {
    return (
        <>
            <div className='relative flex flex-col justify-center items-start lg:px-24 px-5 py-16 font-mon font-medium sm:text-base text-sm sm:h-screen text-900 border-b border-99 gap-2'>
                <div className=' flex items-center'>
                    <img 
                        className='absolute sm:h-14 h-8 top-16 left-1  z-0' 
                        src={circle} 
                        alt="Circle" 
                    />
                    <h1 className='font-dm sm:text-8xl text-5xl relative z-10'>My Experience:</h1>
                </div>

                <div className='flex sm:py-8 py-5 items-start content-start gap-y-4 self-stretch flex-wrap' >
                    {data.map((e, index) => {
                        return (
                            <div key={index} className='flex sm:min-w-[640px] min-w-[300px] items-start gap-2 flex-1'>
                                <img className='sm:w-6  w-4 ' src={e.icon} alt={index} />
                                <p >{e.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Experience

import React from 'react'
import project1 from '../assets/images/project1.svg'
import project2 from '../assets/images/project2.svg'
import project3 from '../assets/images/project3.svg'
import project4 from '../assets/images/project4.svg'

const data = [
  {
    image: project4,
    smDesc: "Table - Booking / Mobile App",
    heading: "Kouton",
    desc: "Kouton simplifies dining out with easy table bookings. Open the app to select your preferred light or dark mode. Browse and filter restaurants to find what you want, then book a table with just a few taps. Receive instant notifications for booking confirmations and updates. Kouton makes dining reservations smooth and convenient.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
  {
    image: project2,
    smDesc: "Table - Booking / Mobile App",
    heading: "Kouton",
    desc: "Kouton simplifies dining out with easy table bookings. Open the app to select your preferred light or dark mode. Browse and filter restaurants to find what you want, then book a table with just a few taps. Receive instant notifications for booking confirmations and updates. Kouton makes dining reservations smooth and convenient.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
  {
    image: project3,
    smDesc: "Table - Booking / Mobile App",
    heading: "Kouton",
    desc: "Kouton simplifies dining out with easy table bookings. Open the app to select your preferred light or dark mode. Browse and filter restaurants to find what you want, then book a table with just a few taps. Receive instant notifications for booking confirmations and updates. Kouton makes dining reservations smooth and convenient.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
  {
    image: project1,
    smDesc: "Table - Booking / Mobile App",
    heading: "Kouton",
    desc: "Kouton simplifies dining out with easy table bookings. Open the app to select your preferred light or dark mode. Browse and filter restaurants to find what you want, then book a table with just a few taps. Receive instant notifications for booking confirmations and updates. Kouton makes dining reservations smooth and convenient.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
]

const Projects = () => {
  return (
    <div className='font-mon font-medium sm:text-base text-sm  text-900 flex lg:px-24 px-5 lg:py-32 py-16  flex-col items-start flex-1  self-stretch  border-b border-99 gap-16' >
      <div className='flex py-6 justify-center items-center self-stretch font-dm text-primary sm:text-8xl text-5xl text-center rounded-full bg-900'>
        My Projects
      </div>
      <div>
        {data.map((e, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col sm:flex-row py-8 items-center gap-16 self-stretch ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
              <img src={e.image} alt="Project" className=''/>
              <div className='flex  flex-col items-start flex-1'>
                <div className='flex flex-col items-start self-stretch'>
                  <div className='flex  items-center gap-6  self-stretch'>
                    <div className='flex flex-col items-start flex-1'>
                      <p className='text-600 sm:text-sm text-xs'>{e.smDesc}</p>
                      <p className='font-dm sm:text-5xl text-3xl'>{e.heading}</p>
                    </div>
                    <p className='text-8xl font-dm text-400'>0{index + 1}</p>
                  </div>
                  <p>{e.desc}</p>
                </div>
                <div className='flex py-8 flex-col items-start gap-4  self-stretch'>
                  <h2 className='font-dm sm:text-3xl text-xl'>Challenges</h2>
                  <div className='flex flex-col items-start gap-2 self-stretch'>
                    <li>{e.ch1}</li>
                    <li>{e.ch2}</li>
                    <li>{e.ch3}</li>
                    <li>{e.ch4}</li>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects

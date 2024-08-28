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
    smDesc: "Car -  leasing  / Web App",
    heading: "Metereos",
    desc: "Our car leasing website is fully responsive and features an intuitive design for an enhanced user experience. With easy navigation, user-friendly search and filter options, and a streamlined application process, it ensures minimal complexity. Real-time updates and notifications keep users informed, making every interaction smooth, efficient, and visually appealing.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
  {
    image: project3,
    smDesc: "OTT  / Mobile App",
    heading: "Cinema+",
    desc: "Kouton simplifies dining out with easy table bookings. Open the app to select your preferred light or dark mode. Browse and filter restaurants to find what you want, then book a table with just a few taps. Receive instant notifications for booking confirmations and updates. Kouton makes dining reservations smooth and convenient.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
  {
    image: project1,
    smDesc: "Employee Management  / Web App",
    heading: "Pixel Bharat",
    desc: "Kouton simplifies dining out with easy table bookings. Open the app to select your preferred light or dark mode. Browse and filter restaurants to find what you want, then book a table with just a few taps. Receive instant notifications for booking confirmations and updates. Kouton makes dining reservations smooth and convenient.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app."
  },
]

const Projects = () => {
  return (
    <div className='font-mon font-medium sm:text-base text-sm  text-900 flex lg:px-24 px-5 lg:py-32 sm:py-16 py-8  flex-col items-start flex-1  self-stretch  border-b border-99 sm:gap-16 gap-8' >
      <div className='flex py-6 justify-center items-center self-stretch font-dm text-primary sm:text-8xl text-5xl text-center rounded-full bg-900'>
        My Projects
      </div>
      <div className='flex flex-col sm:gap-0 gap-8'>
        {data.map((e, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row sm:items-center sm:gap-16 gap-6 self-stretch ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              
              {/* Image Container with Overlay and Hover Effect */}
              {e.heading === "Metereos" ? (
              <div className="relative group rounded-lg">
                <img src={e.image} alt="Project" className='rounded-lg'/>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <a href='https://car-neon-alpha.vercel.app/' className="px-8 py-4 bg-primary text-900  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Launch
                  </a>
                </div>
              </div>
              ) : (
                <img src={e.image} alt="Project" className=''/>
              )}
              <div className='flex  flex-col items-start flex-1'>
                <div className='flex flex-col items-center self-stretch gap-2'>
                  <div className='flex  items-center gap-6  self-stretch'>
                    <div className='flex flex-col items-start flex-1'>
                      <p className='text-600 sm:text-sm text-xs'>{e.smDesc}</p>
                      <p className='font-dm sm:text-5xl text-3xl'>{e.heading}</p>
                    </div>
                    <p className='sm:text-8xl text-6xl font-dm text-300'>0{index + 1}</p>
                  </div>
                  <p>{e.desc}</p>
                </div>
                <div className='flex sm:py-8 py-6 flex-col items-start gap-4  self-stretch'>
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

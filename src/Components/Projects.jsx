import React, { useState } from 'react';
import { InView } from 'react-intersection-observer'; // Ensure this is imported
import project1 from '../assets/images/project1.svg';
import project2 from '../assets/images/project2.svg';
import project3 from '../assets/images/project3.svg';
import project4 from '../assets/images/project4.svg';

const data = [
  {
    image: project4,
    smDesc: "Table - Booking / Mobile App",
    heading: "Kouton",
    desc: "Kouton streamlines dining with easy table bookings, light/dark mode, and quick restaurant search. Receive instant booking confirmations and updates for a smooth dining experience.",
    ch1: "Creating user flow.",
    ch2: "Identification of user needs.",
    ch3: "Create wireframes for design.",
    ch4: "Maintaining a consistent design language across the app.",
    link: "https://www.figma.com/proto/peXf9Tsi6MCjUCbWFtF7y0/table-booking-(Copy)?page-id=0%3A1&node-id=215-5249&node-type=frame&viewport=-1711%2C-1508%2C0.21&t=MhxhRSmL9pK4FRxU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=215%3A7203&show-proto-sidebar=1"
  },
  {
    image: project2,
    smDesc: "Car -  leasing  / Web App",
    heading: "Metereos",
    desc: "A fully responsive, intuitive website with easy navigation, user-friendly search and filters, and a streamlined application process. Real-time updates ensure smooth, efficient interactions.",
    ch1: "Designing for Emotional Engagement",
    ch2: "Understanding User Needs.",
    ch3: "Consistency in Design",
    ch4: "Designing for Different Devices",
    link: "https://car-neon-alpha.vercel.app/"
  },
  {
    image: project3,
    smDesc: "OTT  / Mobile App",
    heading: "Cinema+",
    desc: "A sleek, user-friendly mobile app with dark and light modes, offering smooth transitions, intuitive content discovery, and personalized recommendations. Designed for ease of use, responsiveness, and accessibility.",
    ch1: "Testing with Real Users",
    ch2: "Identification of user needs.",
    ch3: "Minimalism vs. Feature-Rich Design.",
    ch4: "Managing Dark and Light Mode.",
    link: "https://www.figma.com/proto/zoaFTlPJiDMo2wksf8SBe0/movie-ticket-booking-(Copy)?page-id=0%3A1&node-id=210-762&node-type=canvas&viewport=108%2C63%2C0.03&t=YyttbrQoAGec5hy3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=210%3A762"
  },
  {
    image: project1,
    smDesc: "Employee Management  / Web App",
    heading: "Pixel Bharat",
    desc: "A user-friendly web app for managing employee records, attendance, and performance with an intuitive interface and efficient design.",
    ch1: "Navigation and Information Architecture.",
    ch2: "Understanding User Needs.",
    ch3: " Simplifying Complex Processes",
    ch4: "Balancing Aesthetics with Usability.",
    link: "https://www.figma.com/proto/yxr1mIHDHul7OZkp1WN35D/Timesheet-(Copy)?page-id=0%3A1&node-id=535-4617&starting-point-node-id=535%3A4617&scaling=min-zoom&content-scaling=fixed&show-proto-sidebar=1&t=fyqkmgZ31foxkW3u-1"
  },
];

const Projects = () => {
  const [animationState, setAnimationState] = useState({});

  return (
    <div className='font-mon font-medium sm:text-base text-sm text-900 flex lg:px-24 px-5 lg:py-32 sm:py-16 py-8 flex-col items-start flex-1 self-stretch border-b border-99 sm:gap-16 gap-8'>
      <div className='flex py-6 justify-center items-center self-stretch font-dm text-primary sm:text-8xl text-5xl text-center rounded-full bg-900'>
        UI/UX Projects
      </div>
      <div className='flex flex-col sm:gap-16 gap-8'>
        {data.map((e, index) => {
          const isEven = index % 2 === 0;
          const animationClass = isEven ? 'animate-slideInFromLeft' : 'animate-slideInFromRight';

          return (
            <InView
              key={index}
              onChange={(inView) => {
                if (inView) {
                  setAnimationState(prev => ({ ...prev, [index]: true }));
                } else {
                  setAnimationState(prev => ({ ...prev, [index]: false }));
                }
              }}
            >
              {({ ref }) => (
                <div
                  ref={ref}
                  className={`flex flex-col lg:flex-row sm:items-center sm:gap-16 gap-6 self-stretch ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${animationState[index] ? animationClass : ''}`}
                >
                  {/* Image Container with Overlay and Hover Effect */}
                 
                    <div className="relative group rounded-lg overflow-hidden">
                      <img src={e.image} alt="Project" className="rounded-lg w-full h-auto" />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        <a href={e.link} target='_blank' className="px-8 py-4 bg-primary text-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Launch
                        </a>
                      </div>
                    </div>
                
                   
                 
                  <div className='flex flex-col items-start flex-1'>
                    <div className='flex flex-col items-center self-stretch gap-2'>
                      <div className='flex items-center gap-6 self-stretch'>
                        <div className='flex flex-col items-start flex-1'>
                          <p className='text-600 sm:text-sm text-xs'>{e.smDesc}</p>
                          <p className='font-dm sm:text-5xl text-3xl'>{e.heading}</p>
                        </div>
                        <p className='sm:text-8xl text-6xl font-dm text-300'>0{index + 1}</p>
                      </div>
                      <p>{e.desc}</p>
                    </div>
                    <div className='flex sm:py-8 py-6 flex-col items-start gap-4 self-stretch'>
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
              )}
            </InView>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

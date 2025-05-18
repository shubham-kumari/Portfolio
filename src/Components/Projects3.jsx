import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import project2 from '../assets/images/project2.svg';
import project3 from '../assets/images/project3.svg';
import project4 from '../assets/images/project4.svg';
import project5 from '../assets/images/peca.png';
import ULALO from '../assets/images/ULALO.svg';
import ULALOW from '../assets/images/ULALOW.svg';
import pixel from '../assets/images/pixel.svg';
import pixelW from '../assets/images/pixelW.svg';
import table from "../assets/images/Table.png"
import kouton from "../assets/images/Kouton.svg"
import dash from "../assets/images/dash.png"
import qcg from "../assets/images/QCG.png"

const data = [
  {
    image: ULALOW,
    heading: "ULALO Testnet - Product Designer at Maxtron (Testnet UX, Web3 Onboarding & Gamification)",
    logo: ULALO,
    link: "https://docs.google.com/presentation/d/1cUdP4saWb7ekX4SUrXuNQTrKiNf9uQygLaS9jCDVACg/edit?usp=sharing",
    lable: "View Project"
  },
  {
    image: pixelW,
    heading: "Timesheet, Employee Management & Project Management web app - UX/UI Design Intern at Pixel Bharat",
    logo: pixel,
    link: "https://www.figma.com/proto/yxr1mIHDHul7OZkp1WN35D/Timesheet?page-id=0%3A1&node-id=1191-15122&p=f&viewport=622%2C98%2C0.03&t=ihgdFExfJhdmAoqS-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=535%3A4617&show-proto-sidebar=1",
    lable: "View Project"
  },
  {
    image: table,

    heading: "Table Booking App for Kouton - UI/UX Design Intern at Pixel Bharat",
    logo: kouton,
    link: "https://www.figma.com/proto/peXf9Tsi6MCjUCbWFtF7y0/table-booking?page-id=0%3A1&node-id=215-5249&p=f&viewport=218%2C308%2C0.03&t=a7XvJLQR3hDP1Lhh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=215%3A7203&show-proto-sidebar=1",
    lable: "View Project"
  },
  {
    image: dash,

    heading: "QCG Dashboard - Freelance (Telegram Analytics, Signal-Based Trading UX, Real-Time Data Dashboard)",
    logo: qcg,
    link: "https://www.figma.com/design/f9oiQTnenuspqqyJKhKlIs/Untitled?node-id=72-2755&t=zEY8SgtCdstwu488-1",
    lable: "Coming Soon"
  },
];

const Projects = () => {
  const [animationState, setAnimationState] = useState({});

  return (
    <div className='flex flex-col items-center justify-center lg:px-40 px-5  sm:py-16 py-8 flex-1 self-stretch border-b border-99 sm:gap-16 gap-8'>
      {/* <div className='flex px-4 py-6 justify-center items-center self-stretch font-dm text-primary sm:text-8xl text-5xl text-center rounded-full bg-900'>
        Projects
      </div> */}
      <div className="font-mon font-medium sm:text-base text-sm flex flex-wrap items-start self-stretch gap-16">
        {data.map((e, index) => {
          return (
            <div
              key={index}
              className=" rounded-2xl overflow-hidden flex flex-col gap-2   w-full sm:w-[calc(50%-2rem)]"
            >
              <div className=" rounded-3xl overflow-hidden bg-900 p-8">
                <img
                  src={e.image}
                  alt="Project Visual"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className=" flex flex-col mt-4 gap-3">
                <div className="flex items-center space-x-2">
                  <img src={e.logo} alt="Company Logo" className="w-auto h-6" />
                </div>
                <div className=' flex flex-col gap-4'>
                <h3 className="text-lg font-mon font-semibold text-900 mt-1">
                  {e.heading}
                </h3>
                <a
                  href={e.link || "#"}
                  target='_blank'
                  className="text-900 font-mon font-medium mt-2 inline-block hover:underline"
                >
                  {e.lable}
                </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>



  );
}

export default Projects;
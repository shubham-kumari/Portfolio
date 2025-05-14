import React from "react";
import car from "../assets/images/car.png";
import skillzyy from "../assets/images/skillzyy (1).png";
import PROJECTMANAGEMENT from "../assets/images/PROJECT-MANAGEMENT.png";
import REACTQUIZ from "../assets/images/REACT-QUIZ.png";


const image = [
  {
    img: car,
    link: "https://car-neon-alpha.vercel.app/",
  },
  {
    img: skillzyy,
    link: "https://www.skillzyy.in/",
  },
  {
    img: PROJECTMANAGEMENT,
    link: "https://project-management-app-five-psi.vercel.app/",
  },
  {
    img: REACTQUIZ,
    link: "https://quiz-drab-alpha.vercel.app/",
  },
];

const Projects2 = () => {
  return (
    <div className="font-mon font-medium text-sm sm:text-base text-900 lg:px-40 px-4 sm:py-16 py-8 flex flex-col gap-8 sm:gap-16 items-center justify-center border-b border-99 min-h-screen">
      <div className="flex py-6 justify-center items-center self-stretch font-dm text-primary text-5xl sm:text-8xl text-center rounded-full bg-900 w-full">
        Frontend Projects
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center px-4">
        {image.map((e, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden w-full max-w-xs"
          >
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <img
                src={e.img}
                alt="Project"
                className="rounded-lg w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Launch
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Projects2;

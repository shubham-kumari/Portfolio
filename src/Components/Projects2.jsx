import React from "react";
import car from "../assets/images/car.png";
import skillzyy from "../assets/images/skillzyy (1).png";
import vb from "../assets/images/VB_ITR.png";

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
    img: vb,
    link: "https://www.itrchandigarh.org/",
  },
];

const Projects2 = () => {
  return (
    <div className="font-mon font-medium sm:text-base text-sm text-900 lg:px-24 px-5 sm:py-16 flex flex-col gap-16 items-center justify-center">
      <div className="flex py-6 justify-center items-center self-stretch font-dm text-primary sm:text-8xl text-5xl text-center rounded-full bg-900">
        Frontend Projects
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-between">
        {image.map((e, index) => {
          return (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden max-w-96"
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={e.img}
                  alt="Project"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                  <a
                    href={e.link}
                    target="_blank"
                    className="px-8 py-4 bg-primary text-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Launch
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects2;
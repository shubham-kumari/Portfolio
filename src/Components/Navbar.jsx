import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuCircleEqual } from "react-icons/lu";
import github from "../assets/images/Github.svg";
import linkedin from "../assets/images/Vector.svg";
import github1 from "../assets/images/Github (2).svg";
import linkedin1 from "../assets/images/Vector (1).svg";
import Header from "./Header";
import { GoHome } from "react-icons/go";
import { SiReaddotcv } from "react-icons/si";
import { GoInfo } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const menu = [
  {
    menuName: <GoHome />,
    path: "#home",
    tooltip: "Home",
  },
  {
    menuName: <SiReaddotcv />,
    path: "#resume",
    tooltip: "Resume",
  },
  {
    menuName: <GoInfo />,
    path: "#about",
    tooltip: "About",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="sm:pt-0 pt-12  flex border-b border-99 text-99 font-mon text-base font-medium h-screen justify-between sm:items-center items-start"
        id="home"
      >
        <Header className="flex items-center" />

        <div className="sm:h-5/6 h-auto sm:px-4 px-0 sm:py-12 py-0 flex flex-col sm:items-center items-start rounded-l-3xl border-b border-99 sm:justify-between justify-start bg-900 ">
          {/* <h1 className='font-dm sm:text-3xl text-lg hidden'>Shubham Kumari</h1> */}
          <div className="hidden lg:flex lg:flex-col justify-between items-center h-full">
            {menu.map((e, index) => (
              <div className="px-2 border-b border-transparent hover:border-secondary relative group inline-flex items-center">
                <a
                  key={index}
                  href={e.path}
                  onClick={(ev) => handleSmoothScroll(ev, e.path)}
                  className="text-2xl text-99 hover:text-secondary py-2"
                >
                  {e.menuName}
                </a>
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-2 py-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {e.tooltip}
                </span>
              </div>



            ))}
            <div className="px-2 border-b border-transparent hover:border-secondary relative group inline-flex items-center">
              <a
                // key={index}
                href="mailto:kumarishubham273@gmail.com"
                // onClick={(ev) => handleSmoothScroll(ev, e.path)}
                className="text-2xl text-99 hover:text-secondary py-2"
              >
                <GrContactInfo className="text-2xl" />
              </a>
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-2 py-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                Mail
              </span>
            </div>



            <a href="https://github.com/shubham-kumari" target="_blank">
              <img
                className=" cursor-pointer w-8 fill-99 "
                src={github1}
                alt="GitHub"
              />{" "}
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-kumari/"
              target="_blank"
            >
              <img
                className=" cursor-pointer w-6 fill-900 py-3"
                src={linkedin1}
                alt="LinkedIn"
              />
            </a>
          </div>
          <button onClick={toggleNavbar} className="lg:hidden">
            <LuCircleEqual className=" text-[8px] text-900 py-12" />
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-900 bg-opacity-50 z-50  "
            onClick={toggleNavbar}
          ></div>
        )}

        <div
          className={`fixed  top-50 right-0 z-50 lg:hidden transform  ${isOpen ? "-translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out`}
        >
          <div className="lg:hidden flex flex-col items-center bg-900 text-primary py-8 px-2 gap-12 rounded-l-xl">
            {menu.map((e, index) => (
              <a
                key={index}
                href={e.path}
                onClick={(ev) => handleSmoothScroll(ev, e.path)}
                className="px-2 py-2 border-b border-transparent text-xl text-99 hover:text-secondary hover:border-secondary"
              >
                {e.menuName}
              </a>
            ))}
            <a
              className="px-5 py-4 text-white hover:text-secondary"
              href="mailto:kumarishubham273@gmail.com"
              target="_blank"
            >
              <GrContactInfo />
            </a>
            <a href="https://github.com/shubham-kumari" target="_blank">
              <img
                className=" cursor-pointer fill-99"
                src={github1}
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-kumari/"
              target="_blank"
            >
              <img
                className=" cursor-pointer fill-99 sm:pt-0 py-3"
                src={linkedin1}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

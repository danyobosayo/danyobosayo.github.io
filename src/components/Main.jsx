import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]"
        src="https://preview.redd.it/minimal-wallpapers-all-at-least-3440x1440-v0-h31qq34lydr81.png?width=5120&format=png&auto=webp&s=bd8c855049ea9aea27cb9e3b96b40bf5435f99ce"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 z-10">
        <div className='max-w-[700px] m-auto lg:items-start items-center h-full w-full flex flex-col justify-center'>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-900">Daniel Kim</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4">
          <TypeAnimation
            sequence={[
              "Web Developer🖥️",
              3000,
              "Food Lover🍣",
              700, 
              "League/Valorant Enthusiast🎮",
              300,
              "Volleyball Enjoyer🏐",
              500,
              "Cat Dad🐈",
              700,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block"}}
            repeat={Infinity}
          />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaGithub size={20} className='cursor-pointer'/>
            <FaInstagram size={20} className='cursor-pointer'/>
            <FaLinkedin size={20} className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

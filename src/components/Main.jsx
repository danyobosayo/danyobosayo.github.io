import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="animate-flash w-full h-screen object-cover scale-x-[-1] opacity-60"
        src="/files/wallpaper.png"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 z-0">
        <div className='max-w-[700px] m-auto lg:items-start items-center h-full w-full flex flex-col justify-center'>
          <h1 className="text-5xl opacity-0 animate-slideFade-delay-1 font-bold text-black ">Hi. I'm Daniel</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 opacity-0 animate-slideFade-delay-2">
          <TypeAnimation
            sequence={[
              "Web Developer🖥️",
              2000,
              "Food Lover🍣",
              2000, 
              "Gamer🎮",
              2000,
              "Volleyball Enjoyer🏐",
              1000,
              "Cat Dad🐈",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block"}}
            repeat={Infinity}
          />
          </h2>
          <div className='flex justify-between opacity-0 pt-6 max-w-[200px] w-full animate-slideFade-delay-3'>
            <a className="hover:opacity-70 duration-150" href='https://github.com/danyobosayo' target='_blank'>
            <FaGithub size={30} className='cursor-pointer'/>
            </a>
            <a className="hover:opacity-70 duration-150" href='https://www.instagram.com/sungsu._.k?igsh=MTJnMWVvNG5ibDJvdg%3D%3D&utm_source=qr' target='_blank'>
            <FaInstagram size={30} className='cursor-pointer'/>
            </a>
            <a className="hover:opacity-70 duration-150" href='https://www.linkedin.com/in/danielsungsukim/' target='_blank'>
            <FaLinkedin size={30} className='cursor-pointer'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

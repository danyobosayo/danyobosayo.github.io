import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1] opacity-60"
        src="https://preview.redd.it/minimal-wallpapers-all-at-least-3440x1440-v0-smony6dnydr81.png?width=7681&format=png&auto=webp&s=a93d31d41141eb4b9848ea8b8e591e206372e729"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 z-0">
        <div className='max-w-[700px] m-auto lg:items-start items-center h-full w-full flex flex-col justify-center'>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-900">Daniel Kim</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4">
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
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://github.com/danyobosayo' target='_blank'>
            <FaGithub size={20} className='cursor-pointer'/>
            </a>
            <a href='https://www.instagram.com/sungsu._.k?igsh=MTJnMWVvNG5ibDJvdg%3D%3D&utm_source=qr' target='_blank'>
            <FaInstagram size={20} className='cursor-pointer'/>
            </a>
            <a href='https://www.linkedin.com/in/danielsungsukim/' target='_blank'>
            <FaLinkedin size={20} className='cursor-pointer'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

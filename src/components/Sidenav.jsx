import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  TbHome,
  TbHomeHand,
  TbFile,
  TbFileSmile,
  TbFolder,
  TbFolderOpen,
  TbMail,
  TbBrandAmongUs,
} from "react-icons/tb";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const menuItems = ["Main", "Resume", "Projects", "Contact"];
  return (
    <div className="z-50 ">
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-8 right-8 z-60 lg:hidden"
      />
      <div
        className={`fixed inset-0 transition-opacity duration-300 ease-in-out ${
          nav ? "opacity-100" : "opacity-100 pointer-events-none"
        }`}
      >
        <div
          onclick=""
          className={`absolute w-full h-screen flex flex-col items-center justify-center bg-black opacity-0 transition-opacity duration-300 ease-in-out ${
            nav ? "bg-black/75 opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <a
              onClick={handleNav}
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`flex w-[50%] justify-center items-center rounded-full shadow-lg bg-[#dad2c9] m-2 px-10 py-2 hover:scale-105 ease-in duration-200 group transition-all ${
                nav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {getIcon(item, "default")}
                {getIcon(item, "hover")}
              </div>
              <span className="pl-4">{item}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="lg:block hidden animate-slideFade-delay-4 opacity-0 fixed left-4 top-[34%] z-10">
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:scale-110 hover:bg-[#b1a8a0] rounded-full border-2 border-black bg-[#dad2c9] z-20 m-4 p-6 cursor-pointer ease-in duration-200"
            >
              <div className="relative translate-x-1">
                <div className="absolute py-3 w-4/12 rounded-full group-hover:opacity-100 duration-300 -translate-y-6">
                  <div className="relative translate-x-8 text-black">
                    {`${item.toLowerCase()}`}
                  </div>
                </div>
                <div className="relative">
                  {getIcon(item, "default")}
                  {getIcon(item, "hover")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const getIcon = (item, type) => {
  const icons = {
    Main: { default: TbHome, hover: TbHomeHand },
    Resume: { default: TbFile, hover: TbFileSmile },
    Projects: { default: TbFolder, hover: TbFolderOpen },
    Contact: { default: TbMail, hover: TbBrandAmongUs },
  };

  const Icon = icons[item][type];
  return (
    <Icon
      className={`absolute -translate-y-4 -translate-x-5 w-auto ${
        type === "default"
          ? "group-hover:opacity-0"
          : "opacity-0 group-hover:opacity-100"
      } transition-opacity duration-300`}
      size={30}
    />
  );
};

export default Sidenav;

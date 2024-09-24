import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TbHome, TbHomeHand, TbFile, TbFileSmile, TbFolder, TbFolderOpen, TbMail , TbBrandAmongUs } from 'react-icons/tb';

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const menuItems = ['Home', 'Resume', 'Projects', 'Contact'];
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-8 right-8 z-20 md:hidden"
      />
      <div className={`fixed inset-0 z-00 bg-white/30 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${nav ? 'opacity-100' : 'opacity-100 pointer-events-none'}`}>
        {menuItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`w-[30%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-105 ease-in duration-200 group transition-all ${nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              {getIcon(item, 'default')}
              {getIcon(item, 'hover')}
            </div>
            <span className="pl-4">{item}</span>
          </a>
        ))}
      </div>

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-6 cursor-pointer hover:scale-110 ease-in duration-200 group'
            >
              <div className="relative translate-x-1">
                {getIcon(item, 'default')}
                {getIcon(item, 'hover')}
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
    Home: { default: TbHome, hover: TbHomeHand },
    Resume: { default: TbFile, hover: TbFileSmile },
    Projects: { default: TbFolder, hover: TbFolderOpen },
    Contact: { default: TbMail , hover: TbBrandAmongUs },
  };

  const Icon = icons[item][type];
  return (
    <Icon
      className={`absolute -translate-y-4 -translate-x-5 w-auto ${type === 'default' ? 'group-hover:opacity-0' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}
      size={30}
    />
  );
};

export default Sidenav;
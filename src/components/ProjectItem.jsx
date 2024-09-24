import React from "react";

const ProjectItem = ({ year, title, identity, image, details }) => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-[#a39a8f]">
        <li className="mb-10 ml-10 -mt-2">
          <div className="absolute w-3 h-3 bg-[#a39a8f] rounded-full mt-1 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-xl rounded-md text-white bg-[#a39a8f]">
              {year}
            </span>
            <span className="text-2xl font-semibold text-[#4b4a47]">
              {title}
            </span>
          </p>
          <div className="flex flex-col lg:flex-row mt-4 ">
            <div className="relative flex justify-center w-[450px] h-[250px] hover:scale-105 duration-300 ease-in-out">
              <img
                src={image}
                className="min-w-[450px] min-h-[250px] object-cover border-8 border-[#a39a8f] rounded-2xl group-hover:opacity-10"
                alt={title}
              />
              <a href="https://github.com/danyobosayo/img-to-ascii">

              </a>
            </div>
            <div className="flex-col mx-4 mt-4">
              <span className="mb-2 text-xl font-normal leading-none">
                {identity}
              </span>
              <p className="text-base font-normal text-stone-500">{details}</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default ProjectItem;

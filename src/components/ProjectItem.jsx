import React from "react";

const ProjectItem = ({ year, title, identity, image, link, details }) => {
  return (
    <div>
      <ol className="flex flex-col lg:flex-row relative lg:border-l border-[#a39a8f]">
        <li className="mb-10 lg:ml-10 -mt-2">
          <div className="lg:block hidden absolute w-3 h-3 bg-[#a39a8f] rounded-full mt-1 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs lg:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-xl rounded-lg text-white bg-[#a39a8f]">
              {year}
            </span>
            <span className="text-2xl font-semibold text-[#4b4a47]">
              {title}
            </span>
          </p>
          <div className="flex flex-col lg:flex-row mt-4 ">
            <div className="relative flex justify-center lg:min-w-[750px] lg:max-w-[750px] lg:max-h-[450px] lg:min-h-[450px] aspect-ratio hover:scale-105 duration-500 ease-in-out">
              <a href={link} target='_blank'>
                <img
                  src={image}
                  className="lg:min-w-[750px] lg:max-w-[750px] lg:max-h-[450px] lg:min-h-[450px] w-fit h-fit object-cover border-8 border-[#a39a8f] rounded-2xl group-hover:opacity-10"
                  alt={title}
                />
              </a>
            </div>
            <div className="flex-col mx-8 mt-4">
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

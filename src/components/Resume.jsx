import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="max-w-[80%] m-auto p-4 py-16">
      <div>
        <h1 className="py-10 text-5xl font-bold text-center text-[#979089]">
          Resume
        </h1>
        <div className="lg:max-w-[70%] min-w-[100%] flex justify-center lg:m-auto">
          <div className="relative p-2 overflow-hidden">
            <a
              className="relative block"
              href="/files/danielkimresume.pdf"
              target="_blank"
            >
              <img
                className="border-black/60 border-4 rounded-lg relative lg:h-fit lg:w-fit object-cover flex hover:opacity-60 duration-100 ease-in "
                src="https://i.imgur.com/eBvXiko.png"
                alt="Daniel Kim's Resume"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
///danielkim.github.io/files/wallpaper.png

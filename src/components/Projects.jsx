import React from "react";
import ProjectItem from "./ProjectItem.jsx";

const data = [
  {
    year: 2024,
    title: "Bibzakar",
    identity: "React, JavaScript, Web Speech API, Firebase",
    img: "/files/bibzakar.png",
    link: "https://bibzakar.com",
    details:
      "Biblider is a web application that helps users memorize bible verses. Though still in development, my goal is to provide a memorization tool for english speakers across the globe. ",
  },
  {
    year: 2024,
    title: "RowdyHacks 2024: Drivo",
    identity: "React Native, Expo Go, TypeScript, Flask",
    img: "/files/drivopic.png",
    link:"https://devpost.com/software/stopgogo?ref_content=my-projects-tab&ref_feature=my_projects",
    details: "Drivo is a mobile application that helps users avoid accidents by providing real-time alerts of traffic light changes. I worked on the backend, utilizing Flask to handle the data processing and analysis. I also worked on a few of the views in the frontend, using React Native to create the user interface.",
  },
  {
    year: 2023,
    title: "Rate My Professor Graph Builder",
    identity: "Streamlit, RateMyProfessor API, Python, Pandas, Numpy",
    img: "https://i.imgur.com/HCaTrFA.png",
    link: "https://github.com/danyobosayo/rmp",
    details:
      "Built a web application that allows users to search for professor ratings organized by Course Number. Still under development for interactive searching and filtering.",
  },
  {
    year: 2023,
    title: "HackSMU V Project: YouMood",
    identity:
      "Flask, Streamlit, Google Cloud Platform, Python, Sentiment Analysis",
    img: "https://i.imgur.com/7QqV1WZ.png",
    link: "https://github.com/jor-dango/smuv",
    details:
      "Primarily worked on the backend leveraging Flask and Streamlit. Used Google Cloud Platform apis such as Cloud Natural Language and Cloud Storage. Pulled youtube video information with Google's Youtube API",
  },
];

const Projects = () => {
  return (
    <div>
      <div id="projects" className="max-w-[80%] m-auto p-4 py-16">
        <h1 className="text-5xl font-bold text-center text-[#979089] mb-12">
          Projects
        </h1>
        {data.map((item, idx) => (
          <ProjectItem
            key={idx}
            year={item.year}
            title={item.title}
            identity={item.identity}
            details={item.details}
            image={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

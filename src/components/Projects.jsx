import React from 'react'
import ProjectItem from './ProjectItem.jsx'

const data = [
    {
        year: 2024,
        title: 'Biblider',
        identity: 'React, Node.js, Express, MongoDB, Google Cloud Platform',
        img: 'https://i.imgur.com/v3A9tTH.png',
        link: '',
        details:
        'Biblider is a non-profit web application that helps users memorize bible verses. Though still in development, my goal is to utilize speech-text recognition to provide a more interactive experience for users. ' 
    },
    {
        year: 2023,
        title: 'Rate My Professor Graph Builder',
        identity: 'Streamlit, RateMyProfessor API, Python, Pandas, Numpy',
        img: 'https://i.imgur.com/HCaTrFA.png',
        link: 'https://github.com/danyobosayo/rmp',
        details:
        'Built a web application that allows users to search for professor ratings organized by Course Number. Still under development for interactive searching and filtering.'
    },
    {
        year: 2023,
        title: 'HackSMU V Project: YouMood',
        identity: 'Flask, Streamlit, Google Cloud Platform, Python, Sentiment Analysis',
        img: 'https://i.imgur.com/7QqV1WZ.png',
        link: 'https://github.com/jor-dango/smuv',
        details:
        'Primarily worked on the backend. Used Flask and Streamlit. Used Google Cloud Platform apis such as Cloud Natural Language and Cloud Storage. Pulled youtube video information with Google\'s Youtube API'
    }
]

const Projects = () => {
  return (
    <div>
    <div id ='projects' className='max-w-[80%] m-auto md: pl-20 p-4 py-16'>
        <h1 className='text-5xl -translate-x-8 font-bold text-center text-[#979089] mb-12'>
            Projects
        </h1>
        {data.map((item,idx)=> (
            <ProjectItem key={idx} year={item.year} title={item.title} identity={item.identity} details={item.details} image={item.img} link={item.link}/>
        ))}
    </div>
    </div>
  )
}

export default Projects
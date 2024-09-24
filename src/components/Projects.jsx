import React from 'react'
import ProjectItem from './ProjectItem.jsx'

const data = [
    {
        year: 2001,
        title: 'Biblider',
        identity: 'React, Node.js, Express, MongoDB, Google Cloud Platform',
        img: 'https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg',
        link: '',
        details:
        'Biblider is a non-profit web application that helps users memorize bible verses. Though still in development, my goal is to utilize speech-text recognition to provide a more interactive experience for users. ' 
    },
    {
        year: 2010,
        title: 'Project Title',
        identity: 'meow',
        img: 'https://i.pinimg.com/originals/a8/55/df/a855df51ab9b3b503221419fd614970f.png',
        link: '',
        details:
        'meow'
    },
    {
        year: 2023,
        title: 'HackSMU V Project: YouMood',
        identity: 'Flask, Streamlit, Google Cloud Platform, Python, Sentiment Analysis',
        img: 'https://wallpapers.com/images/hd/1920x1080-full-hd-nature-sunny-clouds-7fetljf7qyco7qsq.jpg',
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
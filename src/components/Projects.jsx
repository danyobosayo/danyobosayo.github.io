import React from 'react'
import ProjectItem from './ProjectItem.jsx'

const data = [
    {
        year: 2001,
        title: 'Project Title',
        identity: 'meow',
        img: 'https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg',
        details:
        'meow'
    },
    {
        year: 2010,
        title: 'Project Title',
        identity: 'meow',
        img: 'https://i.pinimg.com/originals/a8/55/df/a855df51ab9b3b503221419fd614970f.png',
        details:
        'meow'
    },
    {
        year: 2023,
        title: 'HackSMU V Project: YouMood',
        identity: 'Flask, Streamlit, Google Cloud Platform, Python, Sentiment Analysis',
        img: 'https://wallpapers.com/images/hd/1920x1080-full-hd-nature-sunny-clouds-7fetljf7qyco7qsq.jpg',
        details:
        'Primarily worked on the backend. Used Flask and Streamlit'
    }
]

const Projects = () => {
  return (
    <div>
    <hr className='w-full absolute h-8 blur-3xl'></hr>
    <div id ='projects' className='max-w-[1040px] m-auto md: pl-20 p-4 py-16'>
        <h1 className='text-5xl font-bold text-center text-[#b6a188] mb-4'>
            Projects
        </h1>
        {data.map((item,idx)=> (
            <ProjectItem key={idx} year={item.year} title={item.title} identity={item.identity} details={item.details} image={item.img}/>
        ))}
    </div>
    </div>
  )
}

export default Projects
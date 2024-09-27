import React from 'react'

const Resume = () => {
  return (
    <div id='resume' className='max-w-[80%] m-auto p-4 py-16'>
        <div>
        <h1 className='py-10 text-5xl font-bold text-center text-[#979089]'>
            Resume
        </h1>
        <div className='lg:max-w-[70%] min-w-[100%] flex justify-center lg:m-auto'>
            <div>
            <a className='mb-2' href='/danielkim.github.io/public/files/danielkimresume.pdf' target='_blank'>
            <img className='lg:h-fit lg:w-fit object-cover flex border-8 border-gray-400 hover:opacity-75 duration-100 ease-in' src="https://i.imgur.com/eBvXiko.png" 
            alt="Daniel Kim's Resume" />
            </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Resume
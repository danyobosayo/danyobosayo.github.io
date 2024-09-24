import React from 'react'

const Resume = () => {
  return (
    <div id='resume' className='max-w-[80%] m-auto p-4 py-16'>
        <div>
        <h1 className='py-10 text-5xl font-bold text-center text-[#979089]'>
            Resume
        </h1>
        <div className='md:max-w-[70%] min-w-[100%] flex justify-center md:m-auto'>
            <div>
            <a className='mb-2' href='https://scarlet-janette-45.tiiny.site/' target='_blank'>
            <img className='md:h-fit md:w-fit object-cover flex border-8 border-gray-400 hover:opacity-75 duration-100 ease-in' src="https://i.imgur.com/eBvXiko.png" 
            alt="Daniel Kim's Resume" />
            </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Resume
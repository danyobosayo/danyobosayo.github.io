import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[80%] m-auto lg:pl-20 p-4 py-16'>
      <h1 className='py-4 text-5xl font-bold text-center text-[#979089]'>
        Contact
      </h1>
      <form action="https://getform.io/f/awngzpwb" method='POST' encType='multipart/form-data'> 
      <div className='grid lg:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
          <label className='uppercase text-lg py-2'>Name</label>
          <input className='border-2 rounded-lg p-3 flex border-[#979089]' type="text" name='name' required/>
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-lg py-2'>Phone</label>
          <input className='border-2 rounded-lg p-3 flex border-[#979089]' type="text" name='phone' required/>
        </div>
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-lg py-2'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-[#979089]' type="email" name='email' required/>
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-lg py-2'>Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-[#979089]' type="text" name='subject' required/>
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-lg py-2'>Message</label>
        <textarea className='border-2 rounded-lg p-3 flex border-[#979089]' rows="10" name="message"></textarea>
      </div>
      <button className='bg-[#a39a8f] text-gray-100 mt-4 w-full p-4 rounded-lg border hover:opacity-90 duration-200 ease-in'>
        Send Message
      </button>
      </form>
    </div>
  )
}

export default Contact
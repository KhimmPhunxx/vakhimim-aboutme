import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=' w-full bg-gray-100 py-10 '>
      <section className='grid p-5 lg:p-0 lg:grid-cols-3 max-w-6xl mx-auto gap-10'>
        <div>
          <h1 className='text-xl font-bold'>Vakhim Im</h1>
          <p className='mt-5 text-sm text-gray-500'>
            I am a web developer who is passionate about creating web applications that are user-friendly and accessible. I am currently looking for a full-time position as a web developer.
          </p>
        </div>
        <div className=' flex space-x-24'>
          <div>
            <h1 className='text-xl font-bold'> Quick Link </h1>
            <ul className='mt-5 text-sm text-gray-500 space-y-2 bl'>
              <div>
                <NavLink to='/' className='hover:text-gray-800 text-lg'>  <IoHomeOutline className='inline-block mr-1' /> Home</NavLink>
              </div>
              <div>
                <NavLink to='project' className='hover:text-gray-800 text-lg'> <GoProjectRoadmap className='inline-block mr-1' /> Project</NavLink>
              </div>
              <div>
                <NavLink to='aboutme' className='hover:text-gray-800 text-lg'> <FaUserTie className='inline-block mr-1' /> About Me</NavLink>
              </div>
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-bold'>Social Media </h1>
            <ul className='mt-5 text-sm text-gray-500 space-y-2 bl'>
              <div>
                <NavLink to='https://github.com/KhimmPhunxx' className='hover:text-gray-800 text-lg' target='_blank'>  <PiGithubLogoLight className='inline-block mr-1' /> GitHub</NavLink>
              </div>
              <div>
                <NavLink to='https://web.facebook.com/imvakhim' className='hover:text-gray-800 text-lg' target='_blank'> <CiFacebook className='inline-block mr-1' /> Facebook</NavLink>
              </div>
              <div>
                <NavLink to='https://www.linkedin.com/in/imvakhim/' className='hover:text-gray-800 text-lg' target='_blank'> <CiLinkedin className='inline-block mr-1' /> Linkeid </NavLink>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-bold'>Newsletter </h1>
          <p className='text-sm text-gray-600 mt-8'>Subscribe to get the latest news and updates.</p>
          <div className='mt-3 flex space-x-3'>
            <input type='text' placeholder='Enter your email address' className='w-full bg-gray-200 p-2 text-sm rounded focus:outline-none' />
            <button className='bg-gray-800 text-white text-sm py-2 px-4 rounded'>Subscribe</button>
          </div>
        </div>
        
      </section>
    </footer>
  )
}

export default Footer

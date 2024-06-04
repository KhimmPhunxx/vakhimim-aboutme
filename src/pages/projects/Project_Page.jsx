import React, { useEffect } from 'react'
import { MyProject } from '../../component-page/project_/MyProject'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Project_Page = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className='pb-0'>
      <section 
      data-aos='fade-up'
      className='w-full p-10 md:p-0'
      >
        <h1
          className='text-5xl font-semibold text-center mt-10 md:mt-32 text-gradient-to-r from-blue-500 to-green-500 leading-tight'
        >My Personal Projects
        </h1>
        <p className=' text-center mt-5 md:w-[500px] mx-auto text-xl'>
        Explore some of the projects I've worked on in the past. From custom web applications to mobile apps, I've done it all.
        </p>
      </section>
      <section className=' lg:mt-40 max-w-6xl mx-auto px-8 lg:px-0'  data-aos='fade-up'>
        <MyProject />
      </section>
    </main>
  )
}

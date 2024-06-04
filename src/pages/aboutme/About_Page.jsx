import React, { useEffect } from 'react'
import vakhimim from '../../assets/vakhimim.jpg'
import { Hire_Me } from '../../component-page/home_/Hire_Me'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About_Page = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className=' w-full pb-10'>
      <section className='max-w-6xl mx-auto grid md:grid-cols-2 mt-20 px-10 lg:px-0' data-aos='fade-up'>
        <div>
          <h1 className=' text-6xl font-bold text-gray-700'>IM VAKHIM</h1>
          <h1 className='text-2xl font-bold text-gray-500 mt-3'>Front-end Developer</h1>
          <p className=' text-lg text-gray-600 mt-3'>
            Hi, I'm Vakhim. I'm a front end developer based in Cambodia. I have a passion for front end development and love to create new things. I'm currently looking for a job as a front end developer. If you're interested in hiring me, please contact me.
          </p>
        </div>
        <div className='mt-5 md:mt-0' >
          <div className=' h-full w-56 mx-auto'>
            <img src={vakhimim} alt='vakhim' className='w-full h-full border rounded-full object-cover object-center' />
          </div>
        </div>
      </section>

      <section className=' w-full mx-auto mt-20 bg-gray-100' data-aos='fade-up'>
        <div className=' max-w-6xl mx-auto py-10 px-8 lg:px-0'>
          <h1 className='text-4xl font-bold text-gray-700 '>
            Work Experience
          </h1>
          <div className='mt-5 hover:scale-105 duration-200'>
            <h1 className=' text-xl font-semibold text-gray-500' >Front-end Developer</h1>
            <p className='mt-2 text-gray-600 text-lg'>
              September 2023 - May 2024
            </p>
            <p className='mt-2 text-gray-600 text-lg'>
              I have worked as a front-end developer for 7 month. I have experience in developing web applications using React.js, Next.js, and Tailwind CSS.
            </p>

          </div>
        </div>
      </section>

      <section className='mt-20 px-8 md:px-0' data-aos='fade-up' >
        <Hire_Me />
      </section>

    </main>
  )
}

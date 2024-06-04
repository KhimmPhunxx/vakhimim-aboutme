import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { MySkills } from '../../component-page/home_/MySkills'
import { Hire_Me } from '../../component-page/home_/Hire_Me'

const Home_Page = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const onclickScroll = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' })
  }

  return (
    <main className='max-w-6xl mx-auto pb-20'>
      <section className='w-full p-10 md:p-0'  data-aos='fade-up'>
        <h1
          className='text-5xl font-semibold text-center mt-10 md:mt-32 text-gradient-to-r from-blue-500 to-green-500 leading-tight'
        >Looking for <br />
          Front end Developer
        </h1>
        <p className=' text-center mt-10 md:w-[630px] mx-auto text-xl'>
          Hi, I'm Vakhim. I'm a web developer based in Cambodia. I have a passion for web development and love to create new things. I'm currently looking for a job as a web developer. If you're interested in hiring me, please contact me.
        </p>
        <div className=' flex justify-center space-x-4 mt-10'>
          <button
           onClick={onclickScroll}
          className='bg-gray-800 text-sm hover:bg-gray-700 duration-200 text-white font-medium py-3 px-4 rounded-lg mt-5'>
             Explore my skills
          </button>
          <button className=' border-2 text-sm duration-200 text-gray-800 font-medium py-3 px-4 rounded-lg mt-5'>
            Contact Me
          </button>
        </div>
      </section>

      <section className='px-8 md:px-0'>
        <MySkills />
      </section>

      <section className='mt-20 px-8 md:px-0'>
        <Hire_Me />
      </section>

    </main>
  )
}

export default Home_Page

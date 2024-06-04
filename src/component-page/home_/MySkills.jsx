import React from 'react'
import { FaPhoenixFramework } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

export const MySkills = () => {

    const data = [
        {
            title: 'Reactjs/Nextjs',
            icon: <FaCode />,
            description: 'Building responsive web applications using Reactjs and Nextjs'
        },
        {
            title: 'HTML/CSS/JavaScript',
            icon: <FaPhoenixFramework />,
            description: 'Building responsive web applications using HTML, CSS, and JavaScript'
        },
        {
            title: 'Tainwind CSS',
            icon: <RiTailwindCssFill />,
            description: 'Building responsive web applications using Tailwind CSS'
        }
    ]

    return (
        <main>
            <section className='w-full' data-aos='fade-up'>
                <h1
                    className='text-3xl font-semibold mt-32 text-gradient-to-r from-blue-500 to-green-500 leading-tight'

                >My Skills
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                    {data.map((item, index) => (
                        <div key={index} className='bg-white p-7 rounded-lg shadow-md border space-y-3 cursor-pointer hover:border-black'>
                            <div className='flex justify-center '>
                                <h1 className='text-5xl bg-gray-100 p-2 rounded-full cursor-pointer text-gray-800 hover:bg-gray-800 hover:text-white duration-300'>{item.icon}</h1>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold mt-4'>{item.title}</h1>
                                <p className='mt-2 text-gray-500'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

import React from 'react'
import pj1 from '../../assets/pj1.png'
import pj2 from '../../assets/pj2.png'
import pj3 from '../../assets/pj3.png'

export const MyProject = () => {
    const data = [
        {
            id : 1,
            name : 'Khodedev',
            image : pj1,
            link : 'https://new-project-clone-lpnp.vercel.app/'
        },
        {
            id : 2,
            name : 'Computer Shop',
            image : pj3,
            link : 'https://seartechkh-com.vercel.app/'
        },
        {
            id : 3,
            name : 'CamTravel',
            image : pj2,
            link : 'https://khim-state-web13-istad.vercel.app/about-us'
        }
    ]
  return (
    <main className='pb-20'> 
        <section className='mt-40 max-w-6xl mx-auto'>
            <h1 className='text-xl font-semibold mt-10 md:mt-32 text-gradient-to-r from-blue-500 to-green-500 leading-tight'>My Personal Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
                {data.map((item) => (
                    <div key={item.id} className='rounded overflow-hidden cursor-pointer hover:shadow duration-200'>
                        <img src={item.image} alt='project' className='w-full h-60 object-cover object-center hover:scale-105 duration-200' />
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                            <a href={item.link} target='_blank' rel='noreferrer' className='text-blue-500'>View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </main>
  )
}

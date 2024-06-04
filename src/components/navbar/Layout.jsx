import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Action_Button } from './Action-Button'
import Footer from './Footer'
import { TbMenuDeep } from 'react-icons/tb'

const Layout = () => {

    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <>
            <header className=' w-full bg-white shadow sticky top-0 z-30 bg-opacity-95'>
                <nav className=' max-w-6xl mx-auto flex justify-between z-40'>
                    <div className='logo p-5'>
                        <h1 className='text-2xl font-semibold'>VAKHIM IM</h1>
                    </div>
                    <div className=' space-x-5 p-6 hidden md:block'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-gray-800 font-medium hover:text-gray-800 text-md bg-slate-100 px-3 py-2 duration-200 rounded' : 'text-gray-800 font-medium hover:text-gray-800 text-md hover:bg-slate-100 px-3 py-2 duration-200 rounded'}
                        >Home</NavLink>
                        <NavLink
                            to='project'
                            className={({ isActive }) => isActive ? 'text-gray-800 font-medium hover:text-gray-800 text-md bg-slate-100 px-3 py-2 duration-200 rounded' : 'text-gray-800 font-medium hover:text-gray-800 text-md hover:bg-slate-100 px-3 py-2 duration-200 rounded'}
                        >Project</NavLink>
                        <NavLink
                            to='aboutme'
                            className={({ isActive }) => isActive ? 'text-gray-800 font-medium hover:text-gray-800 text-md bg-slate-100 px-3 py-2 duration-200 rounded' : 'text-gray-800 font-medium hover:text-gray-800 text-md hover:bg-slate-100 px-3 py-2 duration-200 rounded'}
                        >About Me</NavLink>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Action_Button />
                        <button
                            onClick={() => setIsOpen((curr) => !curr)}
                            className='text-3xl mr-4 p-1 rounded bg-slate-100 duration-200 hover:bg-slate-200 md:hidden'>
                            <TbMenuDeep />
                        </button>
                    </div>
                </nav>


                <section
                    onClick={() => setIsOpen(true)}
                    className={` ${isOpen ? 'w-0' : 'w-full'} h-screen bg-gray-400 bg-opacity-70 top-0 fixed`}>
                    <div className={`${isOpen ? 'w-0 p-0' : ' w-64 p-4'} transition-all h-full bg-white overflow-hidden space-y-3 fixed`}>
                        <h1 className='text-xl font-bold border-b pb-2'>IM VAKHIM</h1>
                        <div className=' space-y-3'>
                            <div>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? 'block text-gray-800 font-medium hover:text-gray-800 text-md bg-slate-100 px-3 py-2 duration-200 rounded' : 'block text-gray-800 font-medium hover:text-gray-800 text-md hover:bg-slate-100 px-3 py-2 duration-200 rounded'}
                                >Home</NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to='project'
                                    className={({ isActive }) => isActive ? 'block text-gray-800 font-medium hover:text-gray-800 text-md bg-slate-100 px-3 py-2 duration-200 rounded' : 'block text-gray-800 font-medium hover:text-gray-800 text-md hover:bg-slate-100 px-3 py-2 duration-200 rounded'}
                                >Project</NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to='aboutme'
                                    className={({ isActive }) => isActive ? 'block text-gray-800 font-medium hover:text-gray-800 text-md bg-slate-100 px-3 py-2 duration-200 rounded' : 'block text-gray-800 font-medium hover:text-gray-800 text-md hover:bg-slate-100 px-3 py-2 duration-200 rounded'}
                                >About Me</NavLink>
                            </div>
                        </div>
                        <button className='bg-gray-800 mt-5 text-sm hover:bg-gray-700 duration-200 text-white font-medium py-3 px-4 rounded'>
                            Contact Me
                        </button>

                    </div>
                </section>


            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

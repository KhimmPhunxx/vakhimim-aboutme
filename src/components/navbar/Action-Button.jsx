import React from 'react'
import { TbMenuDeep } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

export const Action_Button = () => {

  const navigate = useNavigate()

  return (
    
      <div className=' '>
        <button
        onClick={() => navigate('/contact')}
        className='bg-gray-800 text-sm hover:bg-gray-700 duration-200 text-white font-medium py-3 px-4 rounded hidden md:block'>
          Contact Me
        </button>
      </div>
   
  )
}

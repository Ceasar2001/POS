import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();
    
  return (
    <button onClick={() => navigate(-1)} className='bg-[#300ab9] p-3 font-bold text-white text-xl rounded-full cursor-pointer'>
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton
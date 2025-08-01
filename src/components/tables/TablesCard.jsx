import React from 'react'

const TablesCard = () => {
  return (
    <div className='w-[300px] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer'>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-[#ebe9e9] text-xl font-semibold'>Tables 1</h1>
            <p className='text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
                Booked
            </p>
        </div>
        <div className='flex items-center justify-center my-5'>
            <h1 className='bg-[#025cca] text-white rounded-full p-5 text-2xl'>AM</h1>
        </div>
    </div>
  )
}

export default TablesCard
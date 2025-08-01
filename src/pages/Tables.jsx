import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import TablesCard from '../components/tables/TablesCard'



const Tables = () => {

    const [status, setStatus] = useState("all");

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
        <div className='flex items-center justify-between px-10 py-4'>
            <div className='flex items-center gap-4'>
                <BackButton />
                <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide'>
                    Tables
                </h1>
            </div>
        <div className='flex items-center justify-around gap-4'>
          <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>All</button>
          <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg ${status === "booked" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>Booked</button>
            </div>
        </div>
        <div className='flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-4rem)]'>
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
            <TablesCard />
        </div>

        
        <BottomNav />
    </section>
  )
}

export default Tables
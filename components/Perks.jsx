import React from 'react'
import web from "../assets/web.png"

import Image from 'next/image'

const Perks = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-20 gap-5 p-4'>
      
      <div className="col-span-1 place-self-center pl-3 md:pl-16">
        <p className="text-4xl md:text-8xl font-semibold mb-3">Perks of learning web3</p>
        
        <div className='flex items-center text-xl md:text-3xl py-2'>
            <div className='bg-white rounded-full h-8 w-8 mr-3'></div>
            <p>No 4 year degree</p>
        </div>
        <div className='flex items-center text-xl md:text-3xl py-2'>
            <div className='bg-white rounded-full h-8 w-8 mr-3'></div>
            <p>Mostly remote</p>
        </div>
        <div className='flex items-center text-xl md:text-3xl py-2'>
            <div className='bg-white rounded-full h-8 w-8 mr-3'></div>
            <p>Job market is global</p>
        </div>
        <div className='flex items-center text-xl md:text-3xl py-2'>
            <div className='bg-white rounded-full h-8 w-8 mr-3'></div>
            <p>Demand is extremely high!</p>
        </div>
        <div className='flex items-center text-xl md:text-3xl py-2'>
            <div className='bg-white rounded-full h-8 w-8 mr-3'></div>
            <p>You can choose to be anonymous</p>
        </div>
      </div>

      <div className="col-span-1 place-self-center">
        <Image src={web} alt="web_landing" className="md:h-[80%] md:w-[80%]" />
      </div>
      
    </div>
  )
}

export default Perks

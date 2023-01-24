import React from 'react'
import solana from "../assets/solana.png"
import ethereum from "../assets/ethereum.png"

import Image from "next/image"

const Partners = () => {
  return (<div className='flex flex-col items-center justify-center py-12 mt-16 md:py-24'>
    <p className='text-center text-xl md:text-5xl font-semibold'>Our Partners</p>
    <div className='h-[2px] w-[18rem] bg-gray-300  mb-12'></div>
    <div className='grid grid-cols-1 md:grid-cols-2 w-full '>
      <div className='place-self-center col-span-1'>
        <Image src={solana} alt="solana" className='h-[97px] w-[300px]' />
      </div>
      <div className='place-self-center col-span-1'>
        <Image src={ethereum} alt="ethereum" className='h-[97px] w-[320px]' />
      </div>
    </div>
    </div>
  )
}

export default Partners

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import ethereum from "../../assets/ethereum.png"
import solana from "../../assets/solana.png"

const Bootcamps = () => {

  const router = useRouter()

  return (
    <div id='bootcamp' className='bg-gradient-to-r py-12 px-8 text-center from-[#9374DC] to-[#58AFEF] md:mx-24 '>

        <p className='text-5xl md:text-7xl font-semibold'>Bootcamps</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-16'>

            <div onClick={()=>router.push("/bootcamps/ethereum")} className='bg-black col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer'>
                <Image src={ethereum} alt="ethereum" className='w-[80%] ml-8' />
                <p className='text-4xl font-semibold'>Ethereum</p>
            </div>

            <div onClick={()=>router.push("/bootcamps/solana")} className='bg-black col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer'>
                <Image src={solana} alt="solana" className='w-[80%] ml-4' />
                <p className='text-4xl font-semibold'>Solana</p>
            </div>

        </div>
      
    </div>
  )
}

export default Bootcamps

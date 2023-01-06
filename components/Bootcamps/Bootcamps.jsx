import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Bootcamps = () => {

  const router = useRouter()

  return (
    <div id='bootcamp' className='bg-gradient-to-r py-12 px-8 text-center from-[#9374DC] to-[#58AFEF] md:mx-24 '>

        <p className='text-5xl md:text-7xl font-semibold'>Bootcamps</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-16'>

            <div onClick={()=>router.push("/bootcamps/ethereum")} className='bg-black flex flex-col items-center col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer h-[13rem] w-[13rem]'>
                <Image src='/assets/ethereum.png' alt="ethereum" width={200} height={200} className='w-[80%] md:ml-8' />
                <p className='text-4xl font-semibold'>Ethereum</p>
            </div>

            <div onClick={()=>router.push("/bootcamps/solana")} className='bg-black col-span-1 p-4 place-self-center rounded-3xl hover:cursor-pointer h-[13rem] w-[13rem]'>
                <Image src='/assets/solana.png' alt="solana" width={200} height={200} className='w-[80%] ml-4' />
                <p className='text-4xl font-semibold'>Solana</p>
            </div>

        </div>
      
    </div>
  )
}

export default Bootcamps

import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Image from 'next/image'

import github from "../../assets/github.png"
import aws from "../../assets/aws.png"
import gfg from "../../assets/gfg.png"
import onedrop from "../../assets/onedrop.png"

const Sponsor = () => {

  useEffect(() => {
    Aos.init({duration: 800});
  },[])

  return (
    <div className='px-12 pt-20 pb-8 text-white'>
      <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>SPONSORS</p>
      <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p data-Aos="fade-left" className='font-bold text-2xl'>Our partners and sponsors</p>
      </div>

      <div className='mt-16'>
        <p className='text-2xl'>TECH PANELISTS</p>
        
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 flex-wrap md:grid-cols-4 gap-8'>
            <Image src={gfg} alt="gfg" className='transform transition duration-500 hover:scale-125 hover:cursor-pointer' />
            <Image src={onedrop} alt="onedrop" className='transform transition duration-500 hover:scale-125 hover:cursor-pointer' />
            <Image src={aws} alt="aws" className='transform transition duration-500 hover:scale-125 hover:cursor-pointer' />
            <Image src={github} alt="github" className='transform transition duration-500 hover:scale-125 hover:cursor-pointer' />
        </div>
      </div>

      <div className='mt-16 flex flex-col md:flex-row '>
        <p className='text-2xl md:mr-6'>Want to be a sponsor?</p>
        <a href='/' className='transform transition duration-500 hover:scale-125 h-10 flex border-transparent font-bold rounded-lg items-center w-24 bg-gradient-to-r from-[#F678F0] to-[#00E8FF] justify-center'>Apply now</a>        
      </div>
    </div>
  )
}

export default Sponsor

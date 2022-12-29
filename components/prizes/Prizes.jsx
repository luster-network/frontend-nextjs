import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Image from 'next/image'

import bluecup from "../../assets/bluecup.png"
import purplecup from "../../assets/purplecup.png"
import greencup from "../../assets/greencup.png"
import orangecup from "../../assets/orangecup.png"

const Prizes = () => {

  useEffect(() => {
    Aos.init({duration: 800});
  },[])

  return (
    <div className='px-12 pt-20 pb-8 text-white'>
       <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>PRIZES</p>
       <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p data-Aos="fade-left" className='font-bold text-2xl'>Cash prizes and goodies</p>
       </div>

       {/* Actual prizes and goodies */}
       <div className='flex justify-between items-center md:px-12 mt-16 flex-wrap'>

        <div className='transform transition duration-500 hover:scale-110 hover:border hover:border-[#EB7EF1] border-purple-800 flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <Image src={bluecup} alt="bluecup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

        <div className='transform transition duration-500 hover:scale-110 hover:border hover:border-[#EB7EF1] border-purple-800 flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <Image src={purplecup} alt="purplecup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

        <div className='transform transition duration-500 hover:scale-110 hover:border hover:border-[#EB7EF1] border-purple-800 flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <Image src={greencup} alt="greencup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

        <div className='transform transition duration-500 hover:scale-110 hover:border hover:border-[#EB7EF1] border-purple-800 flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <Image src={orangecup} alt="orangecup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

       </div>

    </div>
  )
}

export default Prizes

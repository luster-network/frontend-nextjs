import React from 'react'

import bluehex from '../assets/bluehex.png'
import whitehex from '../assets/whitehex.png'
import blubo from '../assets/blubo.png'
import blubn from '../assets/blubn.png'
import Image from 'next/image'

const AdditionalInfo = () => {
  return (
    <div>
        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
            <Image src={bluehex} alt="hex" className='hidden md:block absolute right-4 h-[10rem] w-[10rem]' />
            <div className='text-center text-4xl md:text-6xl md:px-16 z-10'>
                <h3>Web3 development can bring revolution in your salaries!</h3>
            </div>
        </div>

        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
            <div className="text-center text-4xl md:text-6xl md:px-16 z-10">
                <p>Come make your <span className='hr3'>Career</span></p> 
                <p>in <span className='hr3'>Web3</span></p>
            </div>
            <div className="image">
                <Image src={whitehex} alt="hex" className='hidden md:block absolute left-4 top-3 h-[10rem] w-[10rem]' />
            </div>
        </div>

        <div className="flex items-center my-16 justify-center min-h-[13rem] relative">
            <Image src={blubo} alt="blubo" className='hidden md:block absolute left-4 h-[10rem] w-[10rem]' />
            <div className='text-center flex flex-col items-center justify-center md:px-16 z-10'>
                <p className='text-4xl md:text-5xl'><span className='hr2'>Third batch for</span> <span className='hr3'>Web3</span> <span className='hr2'>Enthusiasts</span></p>
                <p className='text-2xl md:text-3xl md:w-[70%] text-center'>A project orientated program for working professionals and students on weekends </p>
            </div>
            <Image src={blubn} alt="blubn" className='hidden md:block absolute right-4 h-[10rem] w-[10rem]' />
        </div>
    </div>
  )
}

export default AdditionalInfo

import React from 'react'
import SolanaCurriculum from './SolanaCurriculum'

const Landing = () => {
  return (
    <div className='px-8'>
      <div className='pt-12 min-h-[95vh] flex flex-col items-center justify-center'>
          <div className='flex flex-col mb-4 md:mb-0 md:flex-row'>
            <p className='text-[#006DF6] m-0 text-[55px] font-bold'>
              <span className='text-blue-800 m-0'>Solana </span>
              <span className='m-0'>Blockchain</span>
            </p>
          </div>
          <div>
            <p className='text-5xl md:text-[60px] m-0 md:mb-6 font-bold'>Development Bootcamp </p>
          </div>
              <p className='mt-8 text-xl md:text-2xl'>We are on the mission to upskill 1M+ Web3 enthusiasts to Web3 developers by 2025</p>
          <div className="button md:mt-8 mt-4">
            <a href='/register' className='h-[4rem] text-3xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[15rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center '><button>Register now !</button></a>
          </div>
      </div>

      <div id='Curriculum'>
        <SolanaCurriculum />
      </div>

      <div className='flex flex-col border-3 items-center text-center justify-center md:my-16 py-12'>
        <p className='font-bold text-5xl text-[#006DF6]'>Connect for free consultation</p>
        <p className='text-2xl my-8'>Schedule online meet now!</p>
        <a href="https://calendly.com/cryptonaukri/pradnyashil" target="_blank" className='border-2 mt-1 text-xl border-[#003979] text-[#006DF6] font-semibold rounded-md px-12 py-2 inline-block hover:bg-[#006DF6] hover:text-white hover:cursor-pointer'>Schedule now !</a>
      </div>

    </div>
  )
}

export default Landing
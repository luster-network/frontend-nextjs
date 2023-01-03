import React from 'react'

import Image from 'next/image'
import graph from '../assets/graph.png'

const Graph = () => {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between md:flex-wrap px-8 py-8'>

        <div className="text-left md:w-[65%]">

            <div className='text-4xl md:text-6xl font-semibold md:w-[75%]'>
                <p>
                    <span className='text-[#006DF6]'>Get a</span>
                    <span className='text-[#006DF6]'> Guaranteed job</span>
                    <span className='text-[#006DF6]'> of minimum</span>
                    <span className='text-[#006DF6]'> 6 LPA</span>
                </p>
            </div>

            <div className="flex flex-wrap my-12">
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> Batch of 100 students</div>
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> Weekend oriented classes</div>
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> Quick doubt resolution</div>
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> Live Classes</div>
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> Web3 certification after learning</div>
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> Job placement</div>
                <div className="border border-[#006DF6] bg-[#006DF6] rounded-md my-1 px-3 py-1 text-[16px] mx-3"> 8 Projects</div>
            </div>

            <div className="button mt-4">
                <a href="/register" className='h-[3rem] text-2xl transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-[12rem] bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center'><button>Register now !</button></a>
            </div>

        </div>

        <div className="graph-image mt-8 md: mr-8 md:mt-0">
            <Image src={graph} alt='graph' className='h-[22rem] w-[19rem]' />
        </div>

    </div>
  )
}

export default Graph
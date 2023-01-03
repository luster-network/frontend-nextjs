import React from 'react'
import './Fees.css'

const Fees = () => {
  return (
    <>
    <div className='flex flex-col py-12 bg-gray-50 text-center justify-center items-center'>
        <div className="fee-title">
            <span className='hr2'>Fees Structure</span>
        </div>

        <div className="flex flex-wrap justify-between mt-16 items-center px-[10%]">
            <div className="flex flex-col items-center">
                {/* <p>Fee Structure: -> Rs. 100000</p>
                <p> Rs. 30000 -> One time => 70% off</p>
                <br/>
                <p> <b>Instalments: 60% off</b></p>
                <p> Rs. 10000 per week on enrolment</p>
                <p> Next week: Rs. 10000</p> */}
                {/* <Card /> */}

                <div className='flex flex-col  md:flex-row items-center justify-center'>

                    <div className='items-center shadow-xl rounded-[15px] w-[22rem] py-8 pt-8 px-8 bg-white'>
                        <div className='text-3xl font-bold mb-1'>60% discount !</div>
                        <div className='h-[2px] m-auto bg-blue-300 w-[13rem]'></div>
                        <p className='text-[16px] mb-2 mt-8'><b>Original fee:</b> ₹1,00,000</p>
                        <p className='text-[16px] my-2'><b>Upfront fee:</b> ₹40,000</p>
                    </div>


                    <p className='mx-8 mt-12 md:mt-6 font-semibold text-gray-500 border-b-2'>OR</p>


                    <div className='items-center shadow-xl rounded-[15px] w-[22rem] py-8 pt-8 px-8 bg-white'>
                    <div className='text-2xl font-bold mb-1'>Pay after placement !</div>
                    <div className='h-[2.6px] m-auto bg-blue-300 w-[13rem]'></div>
                    <p className='text-[16px] mb-2 mt-8'>₹<b>10K : </b>Registration fee </p>
                    <p className='text-[16px] my-2'>₹<b>90K : </b>Pay after placement</p>
                    </div>
                </div>

                <p className='mt-8 text-3xl font-semibold'>EMI option available!</p>


                <div className="button left-14 mt-12 ">
                   <a href='/register' className='text-[15px]' ><button>Register now !</button></a>
                </div>
            </div>

            {/* <div className="mt-8 md:mt-0 md:ml-20">
                <img src={manfee} className="h-[15rem] ml-20 md:ml-0" alt='fees' />
            </div> */}
        </div>
    </div>

    <div className="two-minute">
        <p>Maybe you are <span className='hr2'>2 minutes</span> away from</p>
        <p> <span className='hr2'> revolutionising</span> your career!</p>
    </div>
    </>
  )
}

export default Fees
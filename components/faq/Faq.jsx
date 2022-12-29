// import React from 'react'
import {BsPlusLg} from "react-icons/bs"

const Faq = () => {
  return (
    <div className='px-12 pt-20 pb-8'>
      <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>FAQs</p>
      <div className='h-[2px] w-24 bg-gradient-to-r mt-3 from-[#C385F1] to-[#7A91D6] mr-2'></div>

        {/* Accordion div */}
        <div className='px-4 text-white md:px-16'>

          <div className='overflow-hidden mb-4 mt-12  bg-[#242424] '>
              <label>
              <input className='absolute opacity-0 peer' type="checkbox"></input>
              <div className='flex items-center cursor-pointer justify-between'>
                  <div className='p-5'>
                      <p className=' m-0 font-bold'>Accrodion title</p>
                  </div>
                  <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
              </div>
              <div className='max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>The description</p></div>
              </label>
          </div>

          <div className='overflow-hidden mb-4 bg-[#242424] '>
              <label>
              <input className='absolute opacity-0 peer' type="checkbox"></input>
              <div className='flex items-center cursor-pointer justify-between'>
                  <div className='p-5'>
                      <p className=' m-0 font-bold'>Accrodion title</p>
                  </div>
                  <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
              </div>
              <div className='max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>The description</p></div>
              </label>
          </div>

          <div className='overflow-hidden mb-4 bg-[#242424] '>
              <label>
              <input className='absolute opacity-0 peer' type="checkbox"></input>
              <div className='flex items-center cursor-pointer justify-between'>
                  <div className='p-5'>
                      <p className=' m-0 font-bold'>Accrodion title</p>
                  </div>
                  <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
              </div>
              <div className='max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>The description</p></div>
              </label>
          </div>

          <div className='overflow-hidden bg-[#242424] '>
              <label>
              <input className='absolute opacity-0 peer' type="checkbox"></input>
              <div className='flex items-center cursor-pointer justify-between'>
                  <div className='p-5'>
                      <p className=' m-0 font-bold'>Accrodion title</p>
                  </div>
                  <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
              </div>
              <div className='max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>The description</p></div>
              </label>
          </div>

        </div>

      </div>
  )
}

export default Faq

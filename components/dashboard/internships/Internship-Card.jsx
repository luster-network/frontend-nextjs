import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {GrLocation} from "react-icons/gr"
import { useRouter } from 'next/router';

const InternshipCard = (props) => {

  const router = useRouter();

  const handleApply = () => {
      router.push(`/jobapplication?id=${props.srId}&type=${props.type}`)
  }

  return (
    <div className=" w-full flex flex-col justify-between shadow-md py-3 px-4 md:my-2 border shadow-indigo-600 border-gray-500 rounded-lg">
  
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
            <div className='flex flex-col'>
                <div className="mt-1 md:text-2xl md:mb-5">{props.cmp}</div>
                <div className="text-lg sm:text-xl mb-2 font-semibold">{props.position}</div>
                <div className='flex mb-2'>
                    <div className='flex items-center'><GrLocation className='text-[#003979] fill-[#003979] mr-1' /><p className='text-sm mr-2'>{props.loc}</p></div>
                    <div className='flex items-center'><p className='text-sm'> INR{" "}{props.sal}</p></div>
                </div>
            </div>

            <div className=''>
                <button onClick={handleApply} className="px-3 py-2 border border-[#003979] rounded-md bg-slate-800 hover:bg-indigo-800">Details</button>
            </div>

        </div>
    </div>
  )
}

export default InternshipCard 
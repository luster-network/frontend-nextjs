import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdLocationOn} from "react-icons/md"
import { useRouter } from 'next/router';

const JobCard = (props) => {

  const router = useRouter();

  const handleApply = () => {
      router.push(`/jobapplication?id=${props.srId}&type=${props.type}`)
  }

  return (
    // min-h-min
    <div className=" w-full flex flex-col justify-between shadow-md py-3 px-4 border md:my-2 shadow-indigo-600 border-gray-500 rounded-lg">
        
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
            <div className='flex flex-col'>
                <div className="mt-1 md:text-2xl md:mb-5">{props.cmp}</div>
                <div className="text-lg sm:text-xl mb-2 font-semibold">{props.position}{" ("}{props.exp}{" "}exp{")"}</div>
                <div className=' flex mb-2'>
                    <div className='flex items-center'><MdLocationOn className='text-indigo-400 h-10 mr-1' /><p className='text-sm mr-2'>{props.loc}</p></div>
                    <div className='flex items-center'><p className='text-sm mr-1 font-semibold text-indigo-400'> INR</p>{" "}<p>{props.sal}</p></div>
                </div>
            </div>

            <div className=''>
                <button onClick={handleApply} className="px-3 py-2 border border-[#003979] rounded-md bg-slate-800 hover:bg-indigo-800">Details</button>
            </div>

        </div>
    </div>
  )
}

export default JobCard 
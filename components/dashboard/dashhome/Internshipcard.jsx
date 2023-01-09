import React,{useState, useEffect} from 'react'
import Axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Internshipscard = () => {

  const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    // const [datarr, setDataArr] = React.useState([]);


    useEffect(()=>async ()=>{
      setLoading(true);
      const response = await Axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/internship/findInternship`)
      .then((res)=>{
          //console.log(res);
          const resp = res.data;
          //console.log(resp.data);
          setDataArr(resp.data);
          //console.log(dataArr);
          setLoading(false);
          
      })
      .catch((err)=>{
          setLoading(false);
      });
  } ,[]);


  return (
    <div>
      <div className="p-4 my-6 shadow-indigo-600 shadow-md ">
       <h1 className="text-2xl mb-2">Latest Internships</h1>
 
      <div className="overflow-auto w-[660px] rounded-lg shadow bg-slate-900 hidden md:block">
      <table className="w-full">
        
        <thead className="border-b-2 border-gray-200">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Job title</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Posted on</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Stipend</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Details</th>
        </tr>
        </thead>

        {dataArr.reverse().slice(0,3).map((internship) => (

        <tbody className="divide-y divide-gray-100 ">
        <tr className="">
          <td className="p-3 text-sm whitespace-nowrap">
            {internship.internshipTitle}
          </td>
          <td className="p-3 text-sm whitespace-nowrap">{internship.postedOn.split("T")[0]}</td>
          <td className="p-3 text-sm whitespace-nowrap">{internship.stipend.amount}</td>
          <td className="p-3 text-sm whitespace-nowrap">
          <div
            className={`text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50`}>
            <div className=''>
                <button onClick={()=> {router.push(`/jobapplication?id=${internship._id}&type=internship`)}} className="px-3 py-2 border border-[#003979] rounded-md bg-slate-800 hover:bg-indigo-800">Details</button>
            </div>
          </div>
          </td>
        </tr>
        </tbody>

        ))}
      </table>
      {/* {dataArr.jobsAdded.length===0?<div className='text-center my-4'>You have not yet posted any Job</div>:<></>} */}
    </div>
 
    <div className="flex flex-col w-full md:hidden">

    {dataArr.reverse().slice(0,3).map((internship) => (
      <div className=" space-y-3 p-4 my-2 shadow-indigo-600 rounded-lg shadow">
        <div className="">
          {internship.internshipTitle}
        </div>
        <div className="flex items-center space-x-2 text-sm">
        <div className="text-sm font-medium mr-8">
          Stipend: {internship.stipend.amount}
        </div>
          <div className="">Posted on: {internship.postedOn.split("T")[0]}</div>
        </div>
          <div>
            <span
              className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50`}>
              <div className=''>
                <button onClick={()=> {router.push(`/jobapplication?id=${internship._id}&type=internship`)}} className="px-3 py-2 border border-[#003979] rounded-md bg-slate-800 hover:bg-indigo-800">Details</button>
              </div>
            </span>
          </div>
      </div>
    ))}
      
    </div>
    <div className='w-full my-3 flex items-end relative'>
      <Link href="/dashboard/internships" className='text-red-500 right-5 top-1 absolute hover:cursor-pointer'>see all..</Link>
    </div>
   </div>
    </div>
  )
}

export default Internshipscard
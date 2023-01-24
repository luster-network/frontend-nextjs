import React, { useState } from "react";
// import {MdOutlineArrowBackIosNew} from "react-icons/md"

import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const Register = () => {

    const router = useRouter()
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [org, setOrg] = useState('');
    const [number, setNumber] = useState();
    const [exp, setExp] = useState('Beginner');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [referral, setReferral] = useState('');

    const[notsubmitted, setNotSubmitted] = useState(true);

    const handleSubmit = (e) => {
      e.preventDefault();
      if(notsubmitted && name && email && org && number && exp && city && state) {
        
        const data = {
          Name: name,
          Email: email,
          Organisation: org,
          Contact: number,
          Experience: exp,
          City: city,
          State: state,
          Referral: referral,
        }

        axios.post('https://sheet.best/api/sheets/62f3c87d-f9a6-465d-bc16-6d5904f3857e',data).then((response)=>{
          // console.log(response);
          setName("");
          setEmail("");
          setNumber(0);
          setExp("Beginner");
          setCity("");
          setOrg("");
          setState("");
          setReferral("");
          setNotSubmitted(false);
          toast.success("Form submitted successfully!");
          router.push("/");
        })

        // toast.error("Form submission failed!");

      } else{
        toast.error("Please fill all the values");
      }
    }
 
    return (
      <>
        <div className="pt-16 w-full text-[14px]">

        <div className="w-full flex flex-col items-center justify-center py-12 ">
            <h1 className="text-3xl md:text-5xl px-3 mt-3 text-center font-semibold mb-2">
              Please fill the below form to register for
            </h1>
            <h1 className="text-3xl md:text-5xl px-3 text-center font-semibold mb-2">
              web3 Bootcamp
            </h1>
        < div className=" mt-8 rounded-2xl">
         <form onSubmit={handleSubmit} className='w-full md:w-[48rem] py-16 flex flex-col bg-gray-800 items-center shadow-2xl rounded-2xl px-10 md:px-0'>

            <div className='my-4 '> 
              <p className='ml-2 mb-2 text-[16px]'>Your Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {!notsubmitted && !name ? <span className='text-red-600 mb-3'>Please enter your name</span> : null}

            <div className='my-4 '>
             <p className='ml-2 mb-2 text-[16px]'>Your Email</p>
             <input onChange={(e) => setEmail(e.target.value)} required={true} value={email} type="email" className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {!notsubmitted && !email ? <span className='text-red-600 mb-3'>Please enter your e-mail</span> : null}
        
             <div className='my-4'>
               <p className='ml-2 mb-2 text-[16px]'>Organisation/Institute</p>
               <input required={true} onChange={(e) => setOrg(e.target.value)} value={org} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
             </div>
             {!notsubmitted && !org ? <span className='text-red-600 mb-3'>Please enter your organisation</span> : null}

            <div className='my-4 '>
              <p className='ml-2 mb-2 text-[16px]'>Phone Number</p>
              <input onChange={(e) => setNumber(e.target.value)} required={true} type="number" value={number} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {!notsubmitted && !number ? <span className='text-red-600 mb-3'>Please enter your contact number</span> : null}
        


        {/* <div className='w-full md:px-28'>
            <InputField size="large" value={desc} onChange={handleDescChange} placeholder='Description' rows={4} />
        </div> */}

  
            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Your experience level</p>
                <select
                  defaultValue="Experience Level"
                  onChange={(e) => setExp(e.target.value)}
                  value={exp}
                  placeholder="Experiance"
                  className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
            </div>
            {/* {submitted && !exp ? <span className='text-red-600 mb-3'>Please enter your experience level</span> : null} */}

            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>City</p>
                <input onChange={(e) => setCity(e.target.value)} value={city} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {!notsubmitted && !city ? <span className='text-red-600 mb-3'>Please enter your city</span> : null}
    

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>State</p>
            <input onChange={(e) => setState(e.target.value)} value={state} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>
          {!notsubmitted && !state ? <span className='text-red-600 mb-3'>Please enter your state</span> : null}

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>Referral</p>
            <input onChange={(e) => setReferral(e.target.value)} value={referral} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>
       

        <button type="submit" className={`border-2 w-[12rem] mr-4 border-[#003979] font-semibold rounded-full px-12 py-3 mt-7 inline-block hover:bg-[#1B2430] hover:text-white`}>SUBMIT</button>
        </form>
        </div>

        </div>
        </div>     
        </>
    )
}
export default Register;

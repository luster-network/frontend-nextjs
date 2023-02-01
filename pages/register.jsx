import React, { useState } from "react";
// import {MdOutlineArrowBackIosNew} from "react-icons/md"

import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

import {IoIosArrowBack ,IoIosArrowForward} from "react-icons/io"

const Register = () => {

    const router = useRouter()
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [org, setOrg] = useState('');
    const [number, setNumber] = useState();
    const [exp, setExp] = useState('Beginner');
    const [bootcamp, setBootcamp] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [referral, setReferral] = useState('');
    const [coupon, setCoupon] = useState('');
    const [loading, setLoading] = useState(false);

    const [step, setStep] = useState(1)
    console.log(step)


    const handleSubmit = (e) => {
      e.preventDefault();
      if(name && email && number && exp && city && state) {
        
        const data = {
          Name: name,
          Email: email,
          Organisation: org,
          Contact: number,
          Experience: exp,
          City: city,
          State: state,
          Referral: referral,
          Registering_For: bootcamp,
          Coupon:coupon
        }
        setLoading(true);

        axios.post('https://sheet.best/api/sheets/62f3c87d-f9a6-465d-bc16-6d5904f3857e',data).then((response)=>{
          // console.log(response);
          setName("");
          setEmail("");
          setNumber(0);
          setExp("Beginner");
          setCity("");
          setState("");
          setReferral("");
          setBootcamp("");
          setCoupon("");
          setLoading(false)
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
         <div className='w-full relative md:w-[48rem] py-16 flex flex-col bg-gray-800 items-center shadow-2xl rounded-2xl px-10 md:px-0'>

            <div className="w-[15rem] flex justify-between mb-4 items-center md:w-[24rem]">
              <div onClick={()=>{setStep(step-1)}} className={`${step===3? "visible" : "invisible"} flex items-center hover:cursor-pointer text-lg`}>⬅️back</div>
              <div className="">Step: {step}/3</div>
            </div>

            { step===1 && 
            <form >
              <div className='my-4 '> 
                <p className='ml-2 mb-2 text-[16px]'>Name*</p>
                <input required={true} onChange={(e) => setName(e.target.value)} value={name} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>

              <div className='my-4 '>
              <p className='ml-2 mb-2 text-[16px]'>Email*</p>
              <input onChange={(e) => setEmail(e.target.value)} required={true} value={email} type="email" className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>
          
              <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Phone Number*</p>
                <input onChange={(e) => setNumber(e.target.value)} required={true} type="tel" value={number} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
              </div>
              
              <div>
                <button disabled={!(name && email && number)} onClick={() => setStep(step+1)} className="flex text-white items-center text-lg hover:cursor-pointer">
                 next➡️ 
                </button>
              </div>
            </form>}

             {step === 2 && 
             <form >
             {/* <div className='my-4'>
               <p className='ml-2 mb-2 text-[16px]'>Organisation/Institute</p>
               <input required={true} onChange={(e) => setOrg(e.target.value)} value={org} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
             </div> */}

            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Your experience level*</p>
                <select
                  defaultValue="Experience Level"
                  onChange={(e) => setExp(e.target.value)}
                  value={exp}
                  required={true}
                  placeholder="Experiance"
                  className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
            </div>

            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>City*</p>
                <input onChange={(e) => setCity(e.target.value)} value={city} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
    

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>State*</p>
            <input onChange={(e) => setState(e.target.value)} value={state} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>

          <div className="flex justify-between">
            <button onClick={() => setStep(step - 1)} className="flex text-white items-center text-lg hover:cursor-pointer">
              ⬅️back
            </button>
            <button disabled={!(state && city)} onClick={() => setStep(step + 1)} className="flex text-white items-center text-lg hover:cursor-pointer">
              next➡️
            </button>
          </div>
          </form>}
          {step ===3 && <form onSubmit={handleSubmit}>
          {/* <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>Referral</p>
            <input onChange={(e) => setReferral(e.target.value)} value={referral} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div> */}

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>Coupon code/Referrals</p>
            <input onChange={(e) => setCoupon(e.target.value)} value={coupon} className=' bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>

          <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Registering for bootcamp*</p>
                <select
                  required={true}
                  defaultValue="Experience Level"
                  onChange={(e) => setBootcamp(e.target.value)}
                  value={bootcamp}
                  placeholder="Experiance"
                  className=" bg-gray-900 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                >
                  <option value="Select bootcamp">Select bootcamp</option>
                  <option value="Solana">Solana</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Both">Both (Solana and Ethereum)</option>
                </select>
            </div>
          </form>}

        {step ===3 && <button disabled={!(bootcamp)} type="submit" onClick={handleSubmit} className={`border-2 w-[12rem] mr-4 border-[#003979] font-semibold rounded-full px-12 py-3 mt-7 inline-block hover:bg-[#1B2430] hover:text-white`}>{loading? "Loading..." : "SUBMIT"}</button>}

        </div>
        </div>

        </div>
        </div>
        </>
    )
}
export default Register;
import React,{useState} from 'react'
import axios from "axios";
import { toast } from "react-toastify";

import { useRouter } from "next/router";


const eligibility = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [level, setLevel] = useState("")
    const [experience, setExperience] = useState(null)
    const [eligible, setEligible] = useState(false)
    const [loading, setLoading] = useState(false)

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email && level && experience) {
          
          const data = {
            Email: email,
            Level: level,
            Experience:experience,
          }
          setLoading(true)

          const redirector = setTimeout(() => {
            router.push("/register");
          }, 6000)
  
          await axios.post('https://sheet.best/api/sheets/3965a7b0-fac0-4c47-a2d3-5648c4b16f7f',data).then((response)=>{
            // console.log(response);
            setEmail("");
            setExperience(0)
            setEligible(true)
            setLoading(false)
            toast.success("You are eligible!");
            redirector;           
          })
  
        } else{
          toast.error("Please fill all the values");
          setLoading(false)
        }
      }

    console.log(level)

  return (
    <div className='min-h-[97vh] grid grid-cols-1'>
      <div className='grid mx-4 md:mx-0 px-6 grid-cols-1 md:grid-cols-12 py-8 col-span-1 mt-12 gap-16 place-self-center border-2 border-indigo-800 rounded-lg'>

        <div className='col-span-1 md:col-span-3 flex md:flex-col text-left justify-center text-3xl'>
            <p>Check</p>
            <p className='mx-2 md:mx-0 md:my-2'>Your</p>
            <p>Eligibility.</p>
        </div>

        <form onSubmit={handleSubmit} className='col-span-1 md:col-span-9'>
            {eligible && <div className='bg-green-600 py-3 px-3 md:px-5 mb-6 border-l-8 border-green-800'>
                You are eligible to apply for our bootcamp. We're now redirecting you to the application page.
            </div>}
            <p>Email:</p>
            <input type="email" required={true} value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" className="bg-transparent mt-2 flex w-full rounded-lg outline-indigo-500 py-2 px-4 border border-indigo-600" />
            <p className='mt-5'>How  would you describe your current level of coding experience?</p>
            <select name="Experience" required={true} value={level} onChange={(e)=>{setLevel(e.target.value)}}  className="bg-transparent mb-5 mt-2 flex w-full rounded-lg outline-indigo-500 py-2 px-4 border border-indigo-600">
                <option value="Please select" className='bg-indigo-900'>Please select</option>
                <option value="No experience" className='bg-indigo-900'>No experience (I have never Programmed before)</option>
                <option value="Begineer" className='bg-indigo-900'>Begineer (I have played with some introductory coding lessons and tutorials)</option>
                <option value="Intermediate" className='bg-indigo-900'>Intermediate (I have completed some coding classes or tutorials)</option>
                <option value="Advanced" className='bg-indigo-900'>Advanced (I can build applications)</option>
                <option value="Professional" className='bg-indigo-900'>Professional (I am an experienced software engineer)</option>
            </select>
            <p>How many years on experience do you have?</p>
            <input type="number" required={true} value={experience} onChange={(e)=>{setExperience(e.target.value)}} placeholder="years on experience" className="bg-transparent mt-2 flex w-full rounded-lg outline-indigo-500 py-2 px-4 border border-indigo-600" />

            <button type='submit' className='w-full rounded-lg bg-indigo-900 py-3 mt-6'>{loading? "Loading..." : "Check eligibility"}</button>
        </form>

      </div>
    </div>
  )
}

export default eligibility

import React, { useState, useEffect } from "react";
import axios from "axios";
import {CgProfile} from "react-icons/cg"
import {MdOutlineSpaceDashboard, MdLogout, MdBusiness} from 'react-icons/md';
import {AiFillCaretDown, AiOutlineUser} from 'react-icons/ai'
import {useRouter} from "next/router"
import Link from 'next/link'
import {useSession, signOut, signIn} from 'next-auth/react'

const Header = () => {

  const router = useRouter();
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession()    

  const API = process.env.REACT_APP_API_ENDPOINT;

  if (typeof window !== 'undefined') {
    var login = localStorage.getItem("login");
    var cUser = localStorage.getItem("cUser");
    var admin = localStorage.getItem("admin");
    var token = localStorage.getItem("token");
    var btoken = localStorage.getItem("tokenNew");
  }

  const [user, setUser] = useState();
  const [anchor, setAnchor] = useState(null);
  const [signanchorEl, setSignanchorEl] = useState(null);
  const [signanchor, setSignanchor] = useState(null);
  const [active, setActive] = useState(false);
  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [ open, setOpen] = useState(false);
  const [ openLogin, setOpenLogin] = useState(false);
  const [ openSignup, setOpenSignup] = useState(false);
  //handleUserSignUp and handleMouseOverSignup are functions for the laptop view two types of signups

  const gotohome =()=>{
    router.push("/");
}
  const toggle = ()=>{
    if(loginActive) setloginActive(false)
    if(signupActive) setSignupActive(false)
    setActive(!active)
 }

  const logout = () => {
    // localStorage.clear();
    // setAnchorEl(null);
    router.push("/auth/logout");
  };

  return(
    <nav className={`w-full top-0 shadow-md bg-black bg-opacity-70 backdrop-blur-xl fixed text-[20px]`}>
      <div className="relative py-5 sm:px-5 flex flex-row items-center justify-between px-3 md:px-24 m-auto nav_container">
          <div onClick={gotohome} className="cursor-pointer">
            <p className='text-lg md:text-6xl font-semibold'>LUSTER</p>
          </div>
          <div>
            <div className={`nav_dropLinks ${active && router.pathname!="/dashboard"?'show':'hide'} `}>
                <div className="absolute top-20 left-0 right-0 w-full px-2 rounded-b-md">
                    <ul className="bg-gray-900 flex flex-col items-center text-lg rounded-md transition-all">
                        <li className="p-1 cursor-pointer "><a href="https://community.cryptonaukri.com/" target='_blank' className="">Community</a></li>
                        <li className="p-1 cursor-pointer "><a href="#bootcamps" className="">Bootcamps</a></li>
                        <li className="p-1 cursor-pointer "><a href="/jobs" className="">Jobs</a></li>
                        <li className="p-1 cursor-pointer "><a href="/internships" className="">Internships</a></li>
                        <li className="p-1 cursor-pointer "><a href="/aboutus" className="">About us</a></li>
                    </ul>
                </div>
            </div>
            <div className="nav_horizontalLinks" >
                {router.pathname==="/devdashboard"|| router.pathname==="/businessprofile" ? <></> : 
                  <ul className="flex gap-8">
                    <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="https://community.cryptonaukri.com/" target='_blank' className="">Community</a>
                    </li>

                    <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="#bootcamp" className="">Bootcamps</a>
                    </li>
                    <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="/jobs" className="">Jobs</a>
                    </li>

                    <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="/internships" className="">Internships</a>
                    </li>

                    <li className="cursor-pointer  hover:underline hover:underline-offset-4">
                      <a href="/aboutus" className="">About us</a>
                    </li>

                  </ul>
                }
            </div>
          </div>
            <div className="flex items-center gap-2">
              {
                // need to access from cookies when cookies applied over whole site
                (status == 'authenticated') ?
                <div className="flex relative items-center gap-2">
                  <div  className='cursor-pointer '>
                    <div onClick={()=> {setOpen(!open)}} className="flex items-center relative">
                      <CgProfile size={30}/>
                      <AiFillCaretDown size={13}  /> 
                    </div> 
                  </div> 

                  {/* Dropdown Content */}
                              
                  { open &&
                    <div className="bg-gray-900 absolute right-4 shadow-lg top-8 w-[153px] rounded-lg py-1">
                      <div onClick={() => {router.push(cUser=="DEVELOPER"? "/devdashboard" : "/businessprofile"); setOpen(!open)} } className="flex flex-row px-3 py-1  hover:bg-gray-100 hover:cursor-pointer"><MdOutlineSpaceDashboard className="h-6 mr-2" /> Dashboard</div>
                      {/* <div onClick={() => {navigate("/profile"); setOpen(!open)} } className="flex flex-row px-3 py-1  hover:bg-gray-100 hover:cursor-pointer"><AiOutlineUser className="h-6 mr-2" /> Profile</div> */}
                      <div onClick={()=>logout()} className="flex flex-row px-3 py-1 hover:bg-gray-100 hover:cursor-pointer"><MdLogout className="h-6 mr-2" /> Sign out</div>
                    </div>
                  }
                            

                  {/* <div onClick={()=>logout()} className="cursor-pointer ">Sign out</div> */}
                  </div>
                  :
                  <div className="flex relative items-center gap-2">
                        <div  className='cursor-pointer '>
                        <button>
                        <div className="flex items-center relative">
                            Login
                          </div>
                        </button>
                        </div> 

                        {/* Dropdown Content */}
                        

                        <div  className='cursor-pointer  ml-4'>
                          <div className="flex items-center relative">
                            Signup
                            <AiFillCaretDown size={13}  /> 
                          </div> 
                        </div>

                        { openSignup &&
                          <div className="bg-gray-800 absolute right-4 shadow-lg top-8 w-[195px] text-lg rounded-lg py-1">

                            <div 
                              onClick={() => {router.push("/auth/devsignup"); setOpenSignup(!openSignup)} } 
                              className="flex flex-row px-3 py-1  hover:bg-gray-900 hover:cursor-pointer"
                            >
                              <AiOutlineUser className="h-6 mr-2" /> Dev signup
                            </div>

                            <div 
                              onClick={() => {router.push("/companySignUp"); setOpenSignup(!openSignup)} } 
                              className="flex flex-row px-3 py-1  hover:bg-gray-900 hover:cursor-pointer"
                            >
                              <MdBusiness className="h-6 mr-2" /> Business signup
                            </div>

                          </div>
                        }

                  </div>
              }
              {router.pathname==="/dashboard" ? <></> :
                <div onClick={toggle} className="hamburger w-7 ml-2 md:hidden cursor-pointer">
                  <div className="w-full h-0.5 bg-gray-800 line rounded-md"></div>
                  <div className="w-full h-0.5 bg-gray-800 my-1.5 rounded-md"></div>
                  <div className="w-full h-0.5 bg-gray-800 rounded-md"></div>
                </div>
              }
          </div>
      </div>
    </nav>
  )
};
export default Header;
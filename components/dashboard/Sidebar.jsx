import React, {useEffect, useState} from "react";
import {BsBriefcase} from 'react-icons/bs';
import {MdOutlineSpaceDashboard, MdLogout} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai';

import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";

const Sidebar = ({}) => {

  const router = useRouter();
  const {option} = router.query

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [loginStatus, setLoginStatus] = useState(false)

  const logout = () => {
    removeCookie('token')
    router.push("/");
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(cookies.token){
        setLoginStatus(true)
      }else{
        toast.error("Please login first")
        router.push("/auth/login")
      }
    }
  },[cookies.token])

  return (
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[90px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">


        <div
          onClick={() => {router.push("/dashboard")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 ${router.pathname==="/dashboard" ?"border-gray-900 font-semibold" : "border-transparent"} border-l-4`} 
        >
          <span>
             <MdOutlineSpaceDashboard className={`nav-icon font-semibold`} /> 
          </span>
          <h1
            className={`hidden xl:block`}
          >
            Dashboard
          </h1>
        </div>
        


        <div
          onClick={() => {router.push("/dashboard/jobs")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 ${option==="jobs" ? "border-gray-900 font-semibold" : "border-transparent"} border-l-4`}
        >
          <span>
            <BsBriefcase className="nav-icon font-bold" />
          </span>
          <h1
            className={`hidden xl:block`}
          >
            Jobs
          </h1>
        </div>



        <div
          onClick={() => {router.push("/dashboard/internships")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 ${option==="internships" ? "border-gray-900 font-semibold" : "border-transparent"} border-l-4 `}
        >
          <span className={``} >
            <BsBriefcase className="nav-icon font-semibold" />
          </span>
          <h1
            className={` hidden xl:block`}
          >
            Internships
          </h1>
        </div>


        <div className="w-full border-t border-gray-200" />

        {/* Only Logout as of now */}

        <div
          onClick={() => {router.push("/dashboard/profile")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 ${option==="profile" ? "border-gray-900 font-semibold" : "border-transparent"} border-l-4`}
        >
          <span className={``}>
            <AiOutlineUser className="nav-icon font-semibold" />
          </span>
          <h1
            className={`hidden xl:block`}
          >
            Profile
          </h1>
        </div>


        <div
          onClick={logout}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}
        >
          <span>
            <MdLogout className="nav-icon font-semibold" />
          </span>
          <h1
            className={`hidden xl:block`}
          >
            Sign out
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
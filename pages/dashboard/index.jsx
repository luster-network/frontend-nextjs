
import { useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar"
import DashHome from "../../components/dashboard/dashhome/DashHome"

import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function index() {

  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(!cookies.token){
        toast.error("Login first")
        router.push("/auth/login")
      }
    }
  },[cookies.token])

  return(
    <div className="mt-[5rem] w-full min-h-[90vh] flex flex-row">
        <Sidebar />
        <div className="w-[100%]">
          <DashHome />
        </div>
    </div>
  )
}

export default index

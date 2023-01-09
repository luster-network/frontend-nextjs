import Dashboard from "../../components/dashboard/Dashboard"
import DashHome from "../../components/dashboard/dashhome/DashHome"
import {useRouter} from "next/router"

function index() {
  const router = useRouter()

  return(
    <div className="mt-[10rem]">
        <Dashboard >
            <DashHome />
        </Dashboard>
    </div>
  )
}

export default index

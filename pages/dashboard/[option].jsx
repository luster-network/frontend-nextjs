import Dashboard from "../../components/dashboard/Dashboard"
import {useRouter} from "next/router"
import DashHome from "../../components/dashboard/dashhome/DashHome"

function Option() {
  const router = useRouter()
  const { option } = router.query;

  return(
    <div className="mt-[10rem]">
        <Dashboard>
            <p>Where am I?</p>
        </Dashboard>
        {option==="jobs" && <DashHome />}
    </div>
  )
}

export default Option
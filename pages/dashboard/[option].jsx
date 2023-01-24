import Sidebar from "../../components/dashboard/Sidebar"
import {useRouter} from "next/router"
import JobsPage from "../../components/dashboard/JobsPage"
import InternshipPage from "../../components/dashboard/internshipPage"
import Profile from "../../components/dashboard/User/UserDashbaord"

function Option() {
  const router = useRouter()
  const { option } = router.query;

  return(
    <div className="mt-[5rem] w-full min-h-[90vh] flex flex-row">
        <Sidebar />
        <div className="w-[100%]">
          {option==="jobs" && <JobsPage />}
          {option==="internships" && <InternshipPage />}
          {option==="profile" && <Profile />}
        </div>
    </div>
  )
}

export default Option
import { useEffect, useState } from 'react'
import Axios from "axios";
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';

const Google = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const router = useRouter()
    const { code } = router.query
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
    const API = "https://api.cryptonaukri.com";
    const sendBackend = async (code) => {
        const response = await Axios.get(`${API}/api/v1/user/googleUserInfo?code=${code}&client=localhost`);

          const data = response.data;

        if (data.userLoggedIn) {
          setLoading(false);
          const timestamp = new Date().getTime();
          const expire = timestamp + 60 * 60 * 24 * 1000 * 2
          const expireDate = new Date(expire)
          try {
            setCookie("token", response.headers.authorization, {
              expires: expireDate,
              path: "/",
              domain: ".luster.network",
            });
          } catch (error) {
            alert(";p");
            console.log(error);
          }

          // below codes to be removed once cookies is applied accross the site
          localStorage.setItem("token", response.headers.authorization);
          localStorage.setItem("cUser", "DEVELOPER");
          localStorage.setItem("login", true);

          // navigate("/jobs");
          router.push("/dashboard");
        }

    }
    useEffect(() => {
        console.log(code)
        if(code !== undefined){
            sendBackend(code)
        }
    }, [code])

  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
    </div>
  )
}

export default Google
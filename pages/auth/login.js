import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';

const login = ({redirectType}) => {
    const [loading, setLoading] = useState(false) 
    const [userInfo, setUserInfo] = useState({
        email : "",
        password : ""
    });
    const router = useRouter()
    const [loginErr, setLoginErr] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(email.split('@')[1]);
        // console.log(process.env.REACT_APP_PRODUCTION_API_ENDPOINT);
        if (userInfo.email && userInfo.password) {
          setLoading(true);
            const email = userInfo.email
            const password = userInfo.password
          try {
            const response = await axios.post(`https://api.cryptonaukri.com/api/v1/user/login`, {
              email,
              password,
            }).catch(function(error){
              console.log(error.response.data.code)
              setLoginErr(error.response.data.code)

              if (loginErr === "NOT_FOUND") {
                setErrMsg("You are not yet registered with us. Please Register your account");
                setLoading(false);
              }
              if (loginErr === "INVALID") {
                setLoading(false);
              }
              if (loginErr === "WRONG_PASSWORD") {
                setErrMsg("Wrong Email or Password");
                setLoading(false);
              }
              // setLoginError("Something went wrong!");
              setLoading(false);
            })
            const data = response.data;
            console.log(data)
            if (data.userLoggedIn) {
              setLoading(false);
              const timestamp = new Date().getTime();
              const expire = timestamp + 60 * 60 * 24 * 1000 * 2;
              const expireDate = new Date(expire);
              try {
                setCookie("token", response.headers.authorization, {
                  expires: expireDate,
                  path: "/",
                  domain: ".luster.network",
                });
              } catch (error) {
                const err = error.response
                console.log(AxiosError.response);
              }
    
              // below codes to be removed once cookies is applied accross the site
              localStorage.setItem("token", response.headers.authorization);
              localStorage.setItem("cUser", "DEVELOPER");
              localStorage.setItem("login", true);
            }
    
            console.log(data);
            router.push('/')
          } catch (error) {
            console.log(error)
          }
        } else {
          setLoginErr('empty values')
          setErrMsg("Email and password is required.");
          console.log("Email and password is required.");
        }
      };
      
    
    
    return ( 
        <section className="font-quicksand flex min-h-screen bg-[#0B0D21]">
            <section className="bg-black border-2 flex flex-col  justify-center border-neutral-50 rounded-3xl h-fit my-auto w-10/12 md:w-2/6 mx-auto">
                <h1 className="text-3xl text-center mt-3 text-blue-500 font-bold font-quicksand">
                    LOGIN
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto my-6 w-10/12">
                    <input
                    value={userInfo.email}
                    onChange={({ target }) =>
                        setUserInfo({ ...userInfo, email: target.value })
                    }
                    type="email"
                    placeholder="john@email.com"
                    className="p-3 text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl"
                    />
                    <input
                    value={userInfo.password}
                    onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                    }
                    type="password"
                    placeholder="********"
                    className="p-3 text-neutral-50 bg-neutral-900 border-2 border-neutral-50 rounded-3xl"
                    />
                
                    <input 
                    type="submit" 
                    className="p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto" value="Login" />
                </form>
                {
                  (loginErr) &&
                  <p className="m-3 text-center text-white">
                    **{errMsg}
                  </p>
                }
            </section>
        </section>
     );
}


export default login

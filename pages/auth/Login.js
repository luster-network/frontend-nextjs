import { Axios } from "axios";
import { useState, useEffect } from "react";
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/router";

const Login = () => {
    const [loading, setLoading] = useState(false) 
    const [userInfo, setUserInfo] = useState({
        email : "",
        password : ""
    });
    const router = useRouter()

    const handleSubmit = async (e) => {
     // validate your userinfo
    e.preventDefault();
    setLoading(true)
    const res = await signIn("Credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
    }   
    

    return ( 
        <section className="font-quicksand flex min-h-screen bg-[#0B0D21]">
            <section className="bg-black border-2 flex flex-col  justify-center border-neutral-50 rounded-3xl h-fit my-auto w-2/6 mx-auto">
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
                
                    {
                        loading ?
                        (
                            <input  
                            className="p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl text-center font-bold w-1/2 mx-auto" value="logging you in..." />
                        ) :
                         (
                            <input 
                            type="submit" 
                            className="p-3 text-neutral-50 bg-blue-500 bg-gradient-to-b from-[#0047F5] to-[#006DF6] rounded-3xl font-bold w-1/2 mx-auto" value="Login" />
                        )
                    }

                </form>
                <button onClick={() => signIn()}>Sign in</button>
            </section>
        </section>
     );
}

export default Login
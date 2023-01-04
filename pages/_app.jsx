import '../styles/globals.css'
import '../styles/header.scss'
import Layout from '../components/landing-page-components/Layout'
import { SessionProvider } from "next-auth/react"
import {useRouter} from "next/router"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if(router.pathname === '/auth/Login'){
    return( 
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
      )
  };

  return(
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>  
  )
}

export default MyApp

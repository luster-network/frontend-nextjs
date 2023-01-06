import '../styles/globals.css'
import '../styles/header.scss'
import Layout from '../components/Layout'
import {useRouter} from "next/router"
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if(router.pathname === '/auth/login' || router.pathname === '/auth/signup'){
    return( 
        <Component {...pageProps} />
      )
  };

  return(
    <CookiesProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  )
}

export default MyApp

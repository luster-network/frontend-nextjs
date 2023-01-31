import '../styles/globals.css'
import '../styles/header.scss'
import Layout from '../components/Layout'
import {useRouter} from "next/router"
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return(
    <CookiesProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  )
}

export default MyApp

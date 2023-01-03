import '../styles/globals.css'
import '../styles/header.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "./styles.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer} from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        {/* <title>Shopify - The ultimate app for inventory management</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Luster.network is a job portal for Blockchain developers where Blockchain developers jobs in India are shared by Blockchain startups."
        />
      </Head>
      <div className='bg-[#05050A] text-white min-h-full'>
        <Navbar />
        <div className=''>
          <Component {...pageProps} />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </div>
)}
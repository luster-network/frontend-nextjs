import '../styles/globals.css'
import '../styles/header.scss'
import type { AppProps } from 'next/app'
import "./styles.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#05050A] text-white min-h-full'>
      <Navbar />
      <div className=''>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
)}

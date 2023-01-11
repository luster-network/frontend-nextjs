import Head from 'next/head'
import Navbar from './layout-components/Navbar'
import Footer from './layout-components/Footer'
import { ToastContainer} from "react-toastify";

const Layout = ({children}) => {
    return (
    <>
      <Head>
        {/* <title>Shopify - The ultimate app for inventory management</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Luster.network is a job portal for Blockchain developers where Blockchain developers jobs in India are shared by Blockchain startups."
        />
        <meta
          content="ethereum workshops"
        />
      </Head>
      <div className='bg-gradient-to-br from-indigo-900 via-gray-900 to-slate-900 text-white overflow-x-hidden'>
        <Navbar />
          {children}
        <Footer />
        <ToastContainer />
      </div>
    </>
     );
}
 
export default Layout;
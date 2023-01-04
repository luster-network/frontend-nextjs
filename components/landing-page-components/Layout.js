import Head from 'next/head'
import Navbar from '../layout-components/Navbar'
import Footer from '../layout-components/Footer'
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
      </Head>
      <div className='bg-[#05050A] text-white min-h-full'>
        <Navbar />
        <div className=''>
          {children}
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
     );
}
 
export default Layout;
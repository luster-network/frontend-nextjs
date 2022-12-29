import Landing from "./Landing"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    // <div className="bg-[#1E1E1E]">
    <div className="bg-black">
        <Navbar />
        <Landing />
        {/* <Faq />
        <Sponsor />
        <Prizes /> */}
        <div>
            {children}
        </div>
    </div>
  );
}

export default Layout
import Landing from "./Landing"
import Navbar from "./Navbar"
import Bootcamps from "./Bootcamps/Bootcamps"

const Layout = ({children}) => {
  return (
    // <div className="bg-[#1E1E1E]">
    <div className="bg-black text-white">
        <Navbar />
        <Landing />
        <Bootcamps />
        <div>
            {children}
        </div>
    </div>
  );
}

export default Layout
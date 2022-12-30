import Landing from "./Landing"
import Navbar from "./Navbar"
import Champions from "./Champions"
import Perks from "./Perks"
import Solution from "./Solution"
import Bootcamps from "./Bootcamps/Bootcamps"
import Reviews from "./Bootcamps/Reviews"

const Layout = ({children}) => {
  return (
    // <div className="bg-[#1E1E1E]">
    <div className="bg-black text-white">
        <Navbar />
        <Landing />
        <Bootcamps />
        <Champions />
        <Perks />
        <Reviews />
        <Solution />
        <div>
            {children}
        </div>
    </div>
  );
}

export default Layout
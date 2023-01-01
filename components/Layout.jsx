import Landing from "./Landing"
import Champions from "./Champions"
import Perks from "./Perks"
import Solution from "./Solution"
import Faq from "./Faq"
import Footer from "./Footer"
import Bootcamps from "./Bootcamps/Bootcamps"
import Reviews from "./Bootcamps/Reviews"
import Fees from "./Bootcamps/Fees"

const Layout = ({children}) => {
  return (
    // <div className="bg-[#1E1E1E]">
    <div>
        <Landing />
        <Bootcamps />
        <Champions />
        <Perks />
        <Reviews />
        <Fees />
        <Solution />
        <Faq />
        <div>
            {children}
        </div>
    </div>
  );
}

export default Layout
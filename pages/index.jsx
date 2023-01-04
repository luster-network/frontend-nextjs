import Landing from "../components/landing-page-components/Landing"
import Champions from "../components/landing-page-components/Champions"
import Perks from "../components/landing-page-components/Perks"
import Solution from "../components/landing-page-components/Solution"
import Faq from "../components/landing-page-components/Faq"
import Footer from "../components/layout-components/Footer"
import Bootcamps from "../components/Bootcamps/Bootcamps"
import Reviews from "../components/Bootcamps/Reviews"
import Fees from "../components/Bootcamps/Fees"

const Home = () => {
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
    </div>
  );
}

export default Home
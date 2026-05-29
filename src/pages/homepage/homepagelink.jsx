import Navbarr from "../../Components/Navbar"
import Hero from "./hero"
import List from "./list"
import Sectionfive from "./Sectionfive"
import Sectionfour from "./Sectionfour"
import Sectionone from "./sectionone"
import Sectionseven from "./Sectionseven"
import Sectionsix from "./Sectionsix"
import Sectionthree from "./Sectionthree"
import Sectiontwo from "./Sectiontwo"

const Homepagelink = () =>{
    return(
        <>
        {/* <List/> */}
        <Navbarr bartext="An Extraordinary Experience" smalltext="Lorem ipsum dolor sit amet consectetur. Eget ultricies nunc odio id dolor. Netus dictumst augue eget mauris a eu sit nunc accumsan." />
        <Hero/>
        <Sectionone/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
        <Sectionfive/>
        {/* <Sectionsix/> */}
        <Sectionseven/>
        </>
    )
}
export default Homepagelink
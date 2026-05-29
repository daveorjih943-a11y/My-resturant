
// import AboutFour from "./AboutFour";
// import AboutHero from "./AboutHero";
// import AboutThree from "./AboutThree";
// import AboutTwo from "./AboutTwo";

import Navbarr from "../../Components/Navbar";
import Footer from "../../Components/Sectionseven";
import Aboutfour from "./Aboutfour";
import Aboutone from "./Aboutone";
import Aboutthree from "./Aboutthree";
import AboutTwo from "./AboutTwo";



const Linkabout = () => {
  return (
    <>
      <Navbarr bartext="About"/>
     <Aboutone/>
     <AboutTwo/>
     <Aboutthree/>
     <Aboutfour/>
      <Footer/>
    </>
  );
};

export default Linkabout;


import Navbarr from "../../Components/Navbar";
import Footer from "../../Components/Sectionseven";
import Aboutfour from "./Aboutfour";
import Aboutone from "./Aboutone";
import Aboutthree from "./Aboutthree";
import Abouttt from "./Abouttwo";




const Linkabout = () => {
  return (
    <>
      <Navbarr bartext="About"/>
     <Aboutone/>
    <Abouttt/>
     <Aboutthree/>
     <Aboutfour/>
      <Footer/>
    </>
  );
};

export default Linkabout;


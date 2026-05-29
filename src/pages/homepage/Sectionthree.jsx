import { Container } from "react-bootstrap"
import food2 from "../../assets/food2.png"
import Goldtext from "../../Components/Somethingnew"
import { FaStar } from "react-icons/fa6"
import Buttonprop from "../../Components/button"


function Sectionthree() {
  return (
    <>
    <Container >
      <div className="sect3 " style={{marginTop:"40px" , display: 'flex', justifyContent: 'flex-end',}}>
         <div  >
           <img className="sect3-img"  src={food2} alt={food2} />
        </div>
        <div className="sect3-text">
          <span className="sect3-span"> $20</span>
           <Goldtext Text="Something new"/> 
        <h1>Our Signature Dish </h1>
        <div className="star">
          <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <h5>Pork Tenderloin marinated in Green Pepper <span className="sect3-span1" >$20</span></h5>
        <h5 style={{color:" rgba(0, 0, 0, 0.7)"
        }}>Pork/ Tenderloin/ Green Pepper/ Veggies</h5>
        <br />
        <Buttonprop btnText=" Order Now"/>
        
        </div>
       
      </div>
    </Container>
    
    </>
  )
}

export default Sectionthree
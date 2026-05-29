import { Container } from "react-bootstrap"
import chef1 from "./chef1.png"
import chef2 from "../../assets/chef2.png"
import chef3 from "../../assets/chef3.png"
import chef4 from "../../assets/chef4.png"
import Goldtext from "../../Components/Somethingnew"


const Aboutthree = () => {
    // const Chefs = [
    //     {
    //         id:0,
    //         image:chef1,
    //         text:"Rejoice Benson",
    //         role:"Resturant Owner",
    //     },
    //     {
    //         id:1,
    //         image:chef2,
    //         text:"John Smith",
    //         role:"Chief Cook",
    //     },
    //     {
    //         id:2,
    //         image:chef3,
    //         text:"Diana Williams",
    //         role:"Cook",
    //     },
    //     {
    //         id:3,
    //         image:chef4,
    //         text:"Victor collins",
    //         role:"Cook",
    //     },
    // ]
//  const KnowChefs = Chefs.map((chef,id)=>(
//     <p key={id}>{chef.image}{chef.text} <br />{chef.role}</p>
//  )) 
  return (
    <>
    <Container fluid >
        <div style={{margin:"100px 0px"}}>
            <div style={{textAlign:"center"}}>
            <Goldtext Text="Something New" styling={{fontSize:"24px"}}/>
            <p style={{fontSize:"24px",fontWeight:"600"}}>Meet the Chefs</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-around"}} className="menu3">
            <div>
                <img src={chef1} alt={chef1} />
                <h4>Rejoice Benson</h4>
                <h5>Resturant Owner</h5>
            </div>
            <div >
                <img src={chef2} alt={chef1} />
                <h4>John Smith</h4>
                <h5>Cheif Cook</h5>
            </div>
            <div>
                <img src={chef3} alt={chef1} />
                <h4>Diana willams</h4>
                <h5>Cook</h5>
            </div>
            <div>
                <img src={chef4} alt={chef1} />
                <h4>Victor Collins</h4>
                <h5>Cook</h5>
            </div>
        </div>
        </div>
        {/* <div>{KnowChefs}</div> */}
        
    </Container>
    </>
  )
}

export default Aboutthree

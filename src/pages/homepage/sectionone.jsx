import man from "../../assets/man.png"
import woman from "../../assets/woman.png"
import { Container } from 'react-bootstrap';
import Goldtext from "../../Components/Somethingnew";
// import Imageprop from "../../Components/imageprop"
// import sec1 from "../../assets/sec1.png"

function Sectionone() {
  return (
    <Container >
        <div className="sect1" style={{display:"flex" ,position:"relative"}}>
      <div className="picing">
       <img className="picing1" style={{marginRight:"20px"}}  src={woman} alt="" />
       <img  className="picing1"src={man} alt="" />
      </div>
        
       <div className="box1 ">
        <Goldtext Text="Something New"/>
        <h4 style={{fontSize:"24px"}}>An Extraordinary Experience</h4>
        <h5 style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis saepe molestiae vel distinctio quaerat officia eius commodi perferendis, pariatur fuga quam quibusdam impedit a sit labore iure quisquam corrupti?</h5>
       </div>
       
    </div>
    </Container>
    
    
    
    
  )
}

export default Sectionone
import aboutpic1 from "../../assets/aboutpic1.png"
import { Container } from 'react-bootstrap'
import Goldtext from "../../Components/Somethingnew"

function Aboutone() {
  return (
    <Container>
        <div className="about1">
           
            
         <div ><img className="about1-img"src={aboutpic1} alt="" /></div>
        <div className="about1-text">
            <Goldtext style={{fontSize:"12px"}} Text="Something New"/>
            <h2>An Extraordinary Experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est nibh arcu pellentesque mi aliquam nunc. In turpis euismod mi habitant diam faucibus nibh fringilla erat. Aenean eleifend magna consectetur fermentum auctor enim at. Aenean turpis arcu egestas turpis id eleifend malesuada.</p>
        </div>
        </div>
    </Container>
  )
}

export default Aboutone

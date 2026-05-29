import { Container } from "react-bootstrap"
import fooding1 from "../../assets/fooding1.png"
import fooding2 from "../../assets/fooding2.png"
import fooding3 from "../../assets/fooding3.png"

const Menutwo = () => {
  return (
    <>
    <Container fluid>
        <div style={{display:"flex", gap:"30px", margin:"50px 0px", borderRadius:"10px"}} className="menutwo">
            <img src={fooding1} alt={fooding1} />
            <img src={fooding2} alt={fooding2} />
            <img src={fooding3} alt={fooding3} />
        </div>
    </Container>
    </>
  )
}

export default Menutwo

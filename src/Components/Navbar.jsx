
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../assets/image1.png"
import Imageprop from './imageprop';
import background from "../assets/background.png"
import Goldtext from './Somethingnew';



function Navbarr({bartext, smalltext}) {
  return (
    <div style={{textAlign:"center",backgroundImage:`url(${background})`,backgroundPosition:"center", height:"500px", backgroundRepeat:"no-repeat", width:"100%",backgroundSize:"cover",  justifyContent:"center"}}>
       <Navbar expand="lg" className='navbarr' >
      <Container fluid>
        <Navbar.Brand href="#">
            <Imageprop pic={logo}/>
             </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" links me-auto my-2 my-lg-0 w-100  justify-content-center gap-5 "
            style={{ maxHeight: '100%', backgroundColor:"transparent"}}
            navbarScroll
          >
            
            <Nav.Link href="/" style={{color:"white",}} className='linking'>Home</Nav.Link>
            <Nav.Link href="/about"style={{color:"white"}} className='linking'>About</Nav.Link>
            <Nav.Link href="/menu"style={{color:"white"}} className='linking'>Menu</Nav.Link>
            <Nav.Link href="#action2"style={{color:"white"}} className='linking'>Delivery</Nav.Link>
            <Nav.Link href="#action2"style={{color:"white"}} className='linking'>Blog</Nav.Link>
            <Nav.Link href="/contact"style={{color:"white"}} className='linking'>Contact</Nav.Link>
          
          
            <button style={{backgroundColor:"black", color:"white", border:"2px solid white"}}>Reservation:+23450805678</button>
          
           
          </Nav>
         
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div style={{color:"white" ,marginTop:"100px", fontSize:"47px"}}>
    
    <Goldtext Text="The Venue is"/>
    {bartext}
    <br />
    <p style={{fontSize:"16px", marginTop:"20px",textAlign:"center"}}>{smalltext}</p>
    
   </div>
   
    </div>
   
  );
}

export default Navbarr;
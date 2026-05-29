
import { Container } from 'react-bootstrap'

const Contactone = () => {
  return (
    <>
    <Container fluid>
        
        
        
       <div style={{backgroundColor:"black", color:"white", display:"flex", justifyContent:"space-between", padding:"35px 70px", margin:"50px 0px"}} className='cont1'>
         <div>
            <h3 style={{fontFamily:"poppins",fontSize:"24px",fontWeight:"700", marginBottom:"50px"}}>
                Contact information
            </h3>
            
            <h5 style={{fontSize:"18px", fontFamily:"poppins"}}>Address :<span style={{color:" #BF8B1A", paddingBottom:"50px"}}> 60 Raymond Opara, Okota, Lagos</span></h5>
            <br />
            <h5 style={{fontSize:"18px", fontFamily:"poppins"}}>Phone :<span style={{color:" #BF8B1A", paddingBottom:"50px"}}> +2347043362623</span></h5>
            <br />
            <h5 style={{fontSize:"18px", fontFamily:"poppins"}}>Email :<span style={{color:" #BF8B1A", paddingBottom:"50px"}}>daveorjih943@gmail.com </span></h5>
            <br />
            <h5 style={{fontSize:"18px", fontFamily:"poppins"}}>Wesite:<span style={{color:" #BF8B1A", paddingBottom:"50px"}}>thevenue.com </span></h5>
            <br />
            
        </div>
        <div >
             <div style={{display:"flex" , gap:"50px"}} className='cont1d'>
            <div><h4 style={{fontFamily:"poppins ", fontSize:"18px", fontWeight:"500"}}>Your name</h4>
            <input type="text" style={{border:"none", backgroundColor:"black", borderBottom:"1px solid white" , color:"white", fontSize:"16px", fontFamily:"poppins", outline:"none"}}  className='cont1e'/></div>
            
            <div> <h4 style={{fontFamily:"poppins ", fontSize:"18px", fontWeight:"500"}}>Your Email</h4>
            <input type="text" style={{border:"none", backgroundColor:"black", borderBottom:"1px solid white" , color:"white" , fontSize:"16px", fontFamily:"poppins", outline:"none",width:"150%" }} className='cont1e'/></div>

        </div>
        
        <br/>  
            <h4 style={{fontFamily:"poppins ", fontSize:"18px", fontWeight:"500"}}>Subject</h4>
            <input type="longtext" style={{border:"none", backgroundColor:"black", borderBottom:"1px solid white", color:"white", width:"100%" , fontSize:"16px", fontFamily:"poppins", outline:"none"}}/>
        
            <h4 style={{marginTop:"30px",fontFamily:"poppins ", fontSize:"18px", fontWeight:"500"}}>Message</h4>
            <br />
            <textarea type="longtext" style={{border:"none", backgroundColor:"black", borderBottom:"1px solid white", color:"white", width:"100%", marginBottom:"40px", fontSize:"16px", fontFamily:"poppins", height:"100px", outline:"none"}}/>
            
            <button style={{color:'white', border:"none", backgroundColor:"#ECB358", padding:"5px 40px", justifySelf:"center", alignSelf:"center",fontFamily:"poppins", fontSize:"14px", fontWeight:"400"}} className='cont1f'> Click Here To Send A Message </button>
        </div>
       
       </div>
    </Container>
    </>
  )
}

export default Contactone

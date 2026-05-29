import React from 'react'
import { Container } from 'react-bootstrap'
import menupic1 from '../../assets/menupic1.png'
import menupic3 from '../../assets/menupic3.png'
import menupic2 from '../../assets/menupic2.png'
import { FaStar } from 'react-icons/fa6'
import Goldtext from '../../Components/Somethingnew'
import Buttonprop from '../../Components/button'
const Menuthree = () => {
const pics=[
    {
        id:0,
        image:menupic3
    },
    {
        id:1,
        image:menupic1
    },
    {
        id:2,
        image:menupic2
    },
]
const picings = pics.map((pic,id)=>(
    <div key={id} style={{marginBottom:"30px", display:"flex", justifyContent:"space-between"}} className='menuthree'>
        <div style={{ justifyContent:"center", alignItems:"center", paddingTop:"50px"}} className='menuthreetext'>
            
            <p className='dolls'>$20</p>
             <FaStar style={{color:"#BF8B1A"}}/><FaStar style={{color:"#BF8B1A"}}/><FaStar style={{color:"#BF8B1A"}}/><FaStar style={{color:"#BF8B1A"}}/><FaStar style={{color:"#BF8B1A"}}/>
        <h5>Pork Tenderloin marinated in Green Pepper <span style={{marginLeft:"90px"}} >$20</span> </h5>
         <h5 style={{color:" rgba(0, 0, 0, 0.7)"
        }}>Pork/ Tenderloin/ Green Pepper/ Veggies</h5>
        <br />
        <Buttonprop btnText=" Order Now"/>
        </div>
         <img  className='menu3pic' src={pic.image} alt="" />
       <div>
       
       </div>
    </div>
))
  return (
    <>
    <Container fluid>
        <div>
            <div className='goldtext'><Goldtext Text="The menu"styling={{textAlign:"center", marginBottom:"50px", borderBottom:"2px solid #BF8B1A",  paddingBottom:"10px"}}/></div>
            
            {picings}
        </div>
    </Container>
    </>
  )
}

export default Menuthree

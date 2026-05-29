import React from 'react'
import { Container } from 'react-bootstrap'
import Goldtext from '../../Components/Somethingnew'

function Aboutfour() {
  return (
    <>
    <Container fluid>
        <div className='about4'>
            <Goldtext Text="What they say"/>
            <p>Lorem ipsum dolor sit amet consectetur. Aliquet leo nec integer enim. Eu vulputate in turpis magna vulputate sed ultricies vel. Lorem pellentesque mi quam ut. Convallis cursus augue nulla vulputate tincidunt. Ac enim neque purus ac lorem lacus cursus.</p>
            <br />
            <Goldtext Text="James cooper"/><span style={{color:"#BF8B1A", fontFamily:"poppins"}}>Client</span>
        </div>
    </Container>
    </>
  )
}

export default Aboutfour

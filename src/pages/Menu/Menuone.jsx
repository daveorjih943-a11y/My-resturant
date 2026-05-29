
import { Container } from 'react-bootstrap'
import Goldtext from '../../Components/Somethingnew'

const Menuone =()=> {
  return (
    <>
    <Container>
        <div style={{textAlign:"center",  margin:"100px 0px"}}>
            <Goldtext Text="Something New" styling={{fontSize:"24px"}}/>
            <h1 style={{fontSize:"24px"}}>Discover Our Menu </h1>
            <br />
            <div style={{display:"flex", gap:"25px", fontSize:"16px"}} className='menu1text'>
                <p>Lorem ipsum dolor sit amet consectetur. Nec quis venenatis purus blandit netus viverra posuere a risus. Vitae nunc proin odio amet. A convallis vulputate diam ornare et. Sapien sit leo pellentesque volutpat nisl tincidunt sed. Risus leo egestas egestas felis scelerisque dui leo mauris dis.</p>
                <p>Lorem ipsum dolor sit amet consectetur. Nec quis venenatis purus blandit netus viverra posuere a risus. Vitae nunc proin odio amet. A convallis vulputate diam ornare et. Sapien sit leo pellentesque volutpat nisl tincidunt sed. Risus leo egestas egestas felis scelerisque dui leo mauris dis.</p>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Menuone

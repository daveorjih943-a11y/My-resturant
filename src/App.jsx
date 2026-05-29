import './App.css'
import Linkabout from './pages/aboutpage/Linkabout';
import Homepagelink from './pages/homepage/homepagelink'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Linkmenu from './pages/Menu/linkmenu';
import Linkcontact from './pages/Contact/linkcont';

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepagelink />} />
          <Route path="/about" element={<Linkabout />} />
          <Route path="/menu" element={<Linkmenu />} />
          <Route path="/contact" element={<Linkcontact />} />
         
        </Routes>
      </Router>
      
    </>
  )
}

export default App

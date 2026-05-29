
import Navbarr from '../../Components/Navbar'
import Menuone from './Menuone'
import Sectionseven from '../homepage/Sectionseven'
import Sectionfive from '../homepage/Sectionfive'
import Menutwo from './Menutwo'
import Menuthree from './Menuthree'

const Linkmenu = () => {
  return (
    <>
    <div>
        <Navbarr bartext="Menu"/>
        <Menuone/>
        <Menutwo/>
        <Menuthree/>
        <Sectionfive/>
        <Sectionseven/>
    </div>
    </>
  )
}

export default Linkmenu

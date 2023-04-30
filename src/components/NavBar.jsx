import {Link} from 'react-router-dom'
import './NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  return <nav>
    <GiHamburgerMenu className='hamburguer'/>
    <ul>
      
      <li><Link to="/">Home</Link></li>
      <li><Link to="/frontendbooks">Front End</Link></li>
      <li><Link to="/backendbooks">Back End</Link></li>
      <li className='last-link'><Link to="/Databooks">Dados</Link></li>
      <BsCart3 className='icon'/>
    </ul>
  </nav>
}

export default NavBar


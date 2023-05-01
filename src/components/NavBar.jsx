import {Link} from 'react-router-dom'
import './NavBar.css'
import { BsFillBookmarkFill } from "react-icons/bs";


const NavBar = () => {
  return <nav className='nav-bar-desktop'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/frontendbooks">Front End</Link></li>
      <li><Link to="/backendbooks">Back End</Link></li>
      <li className='last-link'><Link to="/Databooks">Dados</Link></li>
      <BsFillBookmarkFill className='save'/>
    </ul>
  </nav>
}

export default NavBar


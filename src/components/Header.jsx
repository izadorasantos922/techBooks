import './Header.css'
import { BsBook } from "react-icons/bs";


const Header = (props) => {
  return(<header>
    <div className="logo">
      TechBooks <BsBook/>
    </div>
    {props.children}
  </header>)
}

export default Header
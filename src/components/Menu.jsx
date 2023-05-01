import { BsFillBookmarkFill } from "react-icons/bs";
import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'
import { AiOutlineClose } from "react-icons/ai";


const Menu = ({onClick}) => {
    return  <nav className='menu'>
        <ul>
         <AiOutlineClose className="close" onClick={onClick}/>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/frontendbooks">Front End</Link></li>
        <li><Link to="/backendbooks">Back End</Link></li>
        <li><Link to="/Databooks">Dados</Link></li>
        <BsFillBookmarkFill className='save'/>
        </ul>
    </nav>
}

export default Menu


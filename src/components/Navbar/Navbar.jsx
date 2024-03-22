import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../assets/logoBP.png'

import './NavbarStyles.css'

const Navbar = () => {

const [click, setClick]= useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='header'>

        <Link to='/' > <img src={logo} width={120} alt="" />  </Link>
        <ul className={click ? 'nav-menu active': 'nav-menu'} >
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/servicios'>Servicios</Link>
            </li>
            <li>
                <Link to='/nosotros'>Nosotros</Link>
            </li>
            <li>
                <Link to='/contacto'>Contacto</Link>
            </li>
        </ul>
        <div className="hamburguer" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{color: '#fff'}}/>) : ( <FaBars size={20} style={{color: '#fff'}} />)}
        
        </div>
     
        </div>
  )
}

export default Navbar
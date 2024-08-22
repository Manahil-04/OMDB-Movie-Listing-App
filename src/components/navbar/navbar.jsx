import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink className={(e) => {return e.isActive? "red": ""}} to='/'><li>Home</li></NavLink>
            <NavLink className={(e) => {return e.isActive? "red": ""}} to='/about'><li>About</li></NavLink>
            <NavLink className={(e) => {return e.isActive? "red": ""}} to='/contact'><li>Contact</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar
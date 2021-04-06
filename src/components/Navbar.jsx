import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/WhiteOutlineLogo.png'

const Navbar = () => {
  return (
    <div className='container'>
    <div className='child-left'>
        <NavLink to='/hawkfest' className='nav_link'>
          <a href='/hawkfest'>
            <img src={logo} width='65vw' height='50vh' alt=''></img>
            </a>
        </NavLink>
        <span>Hawkfest 2021</span>
    </div>
      <div className='child-right'>
      <NavLink to='/hawkfest' className='nav_link' activeClassName='selected'> Map </NavLink>
      <NavLink to='/hawkfest/about' className='nav_link' activeClassName='selected'> About </NavLink>
      <NavLink to='/hawkfest/contact' className='nav_link' activeClassName='selected'> Contact </NavLink>
      <NavLink to='/hawkfest/credit' className='nav_link' activeClassName='selected'> Credit </NavLink>
      </div>
    </div>
  )
};

export default Navbar;
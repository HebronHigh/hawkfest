import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/WhiteOutlineLogo.png'

const Navbar = () => {
  return (
    <div className='container'>
    <div className='child-left'>
        <NavLink to='/hawkfest' className='nav_link'>
          <a href="" className='logo'>
            <img width='70px' height='55px' className='logo' src={logo} alt=''/>
          </a>
        </NavLink>
        <span>Hawkfest 2021</span>
    </div>
    <div className='child-right'>
      <NavLink to='/hawkfest/about' className='nav_link' activeClassName='selected'> About </NavLink>
      <NavLink to='/hawkfest/contact' className='nav_link' activeClassName='selected'> Contact </NavLink>
      <NavLink to='/hawkfest/credit' className='nav_link' activeClassName='selected'> Credit </NavLink>
      </div>
    </div>
  )
};

export default Navbar;
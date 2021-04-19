import { NavLink } from 'react-router-dom'

import './../styles/Navbar.css'
import logo from '../assets/WhiteOutlineLogo.png'


/**
 * functional component for the navbar
 *
 * @returns html for the navbar at the top of the screen
 * @author Ethan Maher
 */
const Navbar = () => {
  return (
    <div className='container'>
    <div className='child-left'>
        <NavLink to='/hawkfest' className='nav_link_img'>
          <a href='/hawkfest'>
            <img src={logo} alt=''></img>
          </a>
        </NavLink>
        <span>HawkFest2021</span>
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
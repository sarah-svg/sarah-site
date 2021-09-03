import React from 'react';
import { Link } from 'react-scroll';

import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className='Header' id='Header'>
      <div className='logo'>  

      </div>

      <span className='nav'>
        <Link activeClass="active" 
          to="home" 
          smooth={true}
          className="nav-link"></Link>
        <Link activeClass="active" 
          to="about" 
          smooth={true}
          className="nav-link">CONTACT</Link>   
        {/* <Link activeClass="active" 
          to="footer" 
          smooth={true}
          className="nav-link">Contact</Link> */}
        <NavLink 
          activeClassName="active"
          to="/page" 
          smooth={true}
          className="nav-link">PROJECTS</NavLink>
     
   
        <a className="a" href="./resume2.pdf">RESUME
        </a>
        
   
      </span>
    </div>
  );
}

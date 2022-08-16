import React from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

export default function Header() {
  return (
    <div className='d-flex w-100 justify-content-end' id='Header'>
      <div className='logo'>  

      </div>

      <nav className='nav d-flex justify-content-end'>
        <Link
          to="/home" 
          smooth={true}
          className="nav-link"></Link>
        <Link 
          to="/about" 
          smooth={true}
          className="nav-link">CONTACT</Link>   
        {/* <Link activeClass="active" 
          to="footer" 
          smooth={true}
          className="nav-link">Contact</Link> */}
        <Link 
          
          to="/page" 
          smooth={true}
          className="nav-link">PROJECTS</Link>
     
   
        <a className="nav-link" href="./resume2.pdf">RESUME
        </a>
        
   
      </nav>
    </div>
  );
}

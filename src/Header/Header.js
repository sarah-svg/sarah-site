import React from 'react';
import { Link } from 'react-scroll';

import './Header.scss';

export default function Header() {
  return (
    <div className='Header' id='Header'>
      <div className='logo'>  
        {/* <a href='/'>
          <img src='./logo.png' alt='logo with s' />
        
        </a>   */}
        {/* <p className="title">Full Stack Software Engineer</p> */}
      </div>

      <div className='nav'>
        <Link activeClass="active" 
          to="home" 
          smooth={true}
          className="nav-link">Home</Link>
        <Link activeClass="active" 
          to="about" 
          smooth={true}
          className="nav-link">Me</Link>
        <Link activeClass="active" 
          to="page" 
          smooth={true}
          className="nav-link">Projects</Link>
        <Link activeClass="active" 
          to="footer" 
          smooth={true}
          className="nav-link">Reach me at</Link>
        <p>  
          <a href="./resume2.pdf">Resume
          </a>
        </p>
   
      </div>
    </div>
  );
}

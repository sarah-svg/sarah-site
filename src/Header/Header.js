import React from 'react';

import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className='d-flex w-100 justify-content-end ' id='Header'>
 
      <div className='nav d-flex justify-content-end'>
        <NavLink
          to="/" 
          className="nav-link">Home</NavLink>  
        <NavLink
          to='/page'
          className="nav-link">Projects</NavLink> 
        <a className=" a nav-link" href="./resume.pdf">Resume
        </a>
        
   
      </div>
    </div>
  );
}

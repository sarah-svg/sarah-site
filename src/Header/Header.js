import React from 'react';

import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../store';
import './Header.scss';

export default function Header() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);

  return (
    <div id='Header'>
      <button
        className='btn btn-outline-dark mt-3 mb-3 d-flex align-items-start d-flex justify-content-center align-items-center'
        onClick={toggleFunction}> <span> Toggle: {toggle ? 'dark' : 'light'}</span> </button>
    
      <div className='d-flex w-100 justify-content-end '>
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
    
    </div>
  );
}

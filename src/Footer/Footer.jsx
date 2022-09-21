import React from 'react';
import Contact from '../Contact/Contact';
import { useContext } from 'react';
import { ThemeContext } from '../store.js';
// import Tech from '../tech/Tech';

import './Footer.scss';
export default function Footer() {
  const { toggle } = useContext(ThemeContext);
  return (
   
    <footer style={{ width: '100% !important' }} className={` fixed-bottom ${toggle ? 'easy' : 'light'}`}> 
      <Contact />
      <div className='d-flex justify-content-center footer'>Created by Sarah Skillen &#169; 2022</div>
    </footer> 

  );
}
// <Tech/>
import React from 'react';
import Contact from '../Contact/Contact';
// import Tech from '../tech/Tech';

import './Footer.scss';
export default function Footer() {
  return (
   
    <footer style={{ width: '100% !important' }} className='footer fixed-bottom'> 
      <Contact />
      <div className='d-flex justify-content-center footer'>Created by Sarah Skillen &#169; 2022</div>
    </footer> 

  );
}
// <Tech/>
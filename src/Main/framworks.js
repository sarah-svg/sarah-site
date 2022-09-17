import React from 'react';
import './Main.scss';



function Frameworks() {
  return (
    <ul class="container">
      <li class="card d-flex  w-100">
        <img src='./react.svg' alt='react' className='react' />
      </li>
      <li class="card d-flex  w-100">
        <img src='./javascript.svg' alt='javascript' className='javascript' />
      </li>
      <li class="card d-flex  w-100">
        <img src='./node.svg' alt='node' className='node' />
      </li> 
      <li class="card d-flex  w-100">
        <img src='./css.svg' alt='css' className='css' />
      </li>
      <li class="card d-flex  w-100">
        <img src='./sass.svg' alt='scss' className='scss' />
      </li>
    </ul>
  );
}

export default Frameworks;
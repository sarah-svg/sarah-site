import React from 'react';
import './Main.scss';



function Frameworks() {
  return (
    <ul className="container">
      <li className="card d-flex  w-100">
        <img src='./react.svg' alt='react' className='react' />
      </li>
      <li className="card d-flex  w-100">
        <img src='./javascript.svg' alt='javascript' className='javascript' />
      </li>
      <li className="card d-flex  w-100">
        <img src='./node.svg' alt='node' className='node' />
      </li> 
      <li className="card d-flex  w-100">
        <img src='./css.svg' alt='css' className='css' />
      </li>
      <li className="card d-flex  w-100">
        <img src='./sass.svg' alt='scss' className='scss' />
      </li>
    </ul>
  );
}

export default Frameworks;
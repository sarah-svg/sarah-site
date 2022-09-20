import React from 'react';
import './Main.scss';



function Frameworks() {
  return (
    <ul className="container d-flex flex-row-wrap">
      <li className="card d-flex">
        <img src='./react.svg' alt='react' className='react m-1' />
      </li>
      <li className="card d-flex ">
        <img src='./javascript.svg' alt='javascript' className='javascript m-1' />
      </li>
      <li className="card d-flex">
        <img src='./node.svg' alt='node' className='node m-1' />
      </li> 
      <li className="card d-flex ">
        <img src='./css.svg' alt='css' className='css m-1' />
      </li>
      <li className="card d-flex">
        <img src='./sass.svg' alt='scss' className='scss m-1' />
      </li>
    </ul>
  );
}

export default Frameworks;
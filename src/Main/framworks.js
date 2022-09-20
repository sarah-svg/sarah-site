import React from 'react';
import './Main.scss';



function Frameworks() {
  return (
    <ul className="container d-flex flex-row-wrap">
      <li className="card d-flex" style={{ height:' 60px !important',
        width:' 65px !important' }}>
        <img src='./react.svg' alt='react' className='react m-1' />
      </li>
      <li className="card d-flex " style={{ height:' 60% !important',
        width:' 65p% !important' }}>
        <img src='./javascript.svg' alt='javascript' className='javascript m-1' />
      </li>
      <li className="card d-flex" style={{ height:' 60px !important',
        width:' 65px !important' }}>
        <img src='./node.svg' alt='node' className='node m-1' />
      </li> 
      <li className="card d-flex " style={{ height:' 60px !important',
        width:' 65px !important' }}>
        <img src='./css.svg' alt='css' className='css m-1' />
      </li>
      <li className="card d-flex" style={{ height:' 60px !important',
        width:' 65px !important' }}>
        <img src='./sass.svg' alt='scss' className='scss m-1' />
      </li>
    </ul>
  );
}

export default Frameworks;
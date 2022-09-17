import React from 'react';
import './Main.scss';



function Frameworks() {
  return (
    <div class="container">
      <div class="card d-flex justify-content-center">
        <img src='./react.svg' alt='react' className='react' />
      </div>
      <div class="card d-flex justify-content-center">
        <img src='./javascript.svg' alt='javascript' className='javascript' />
      </div>
      <div class="card d-flex justify-content-center">
        <img src='./node.svg' alt='node' className='node' />
      </div> 
      <div class="card d-flex justify-content-center">
        <img src='./css.svg' alt='css' className='css' />
      </div>
      <div class="card d-flex justify-content-center">
        <img src='./sass.svg' alt='scss' className='scss' />
      </div>
    </div>
  );
}

export default Frameworks;
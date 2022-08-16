import React from 'react';

import './Main.scss';
const lang = ['React', 'Node', 'Express', 'SCSS', 'JavaScript'];



function Frameworks() {
  const mapped = lang.map((index) => {
    return <li id="carousel" key={index}><span>-</span>{index}-</li>;
  });

  return (
    <div class="container">
      <div class="card">
        <h3 class="title">React</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <img src='./react.svg' alt='react' className='react' />

        {/* <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div> */}
      </div>
      <div class="card">
        <h3 class="title">JavaScript</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <img src='./javascript.svg' alt='javascript' className='javascript' />
        {/* <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div> */}
      </div>
      <div class="card">
        <h3 class="title">Node</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <img src='./node.svg' alt='node' className='node' />
        {/* <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div> */}
        {/* </div>
      <div class="card">
        <h3 class="title">Express</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        {/* <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div> */}
      </div> */}
      <div class="card">
        <h3 class="title">CSS</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <img src='./css.svg' alt='css' className='css' />
        {/* <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div> */}
      </div>
      <div class="card">
        <h3 class="title">SCSS</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <img src='./sass.svg' alt='scss' className='scss' />
        {/* <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div> */}
      </div>
    </div>
  );
}

export default Frameworks;
    // <div className="lang">
    //   <div>{}</div> 
    //   <div>{}</div>
    //   <div>{}</div>
    //   <div>{}</div>
    // </div>
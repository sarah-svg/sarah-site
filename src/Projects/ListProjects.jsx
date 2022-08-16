import React, { useState, useEffect } from 'react';
import { projectsData } from './data';
import { Project } from './Project';
import uuid from 'react-uuid';
import './Projects.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


function ListProjects() {
  const [isMobile, setMobile] = useState(window.innerWidth < 1100);

  const handleMobile = () => {
    setMobile(window.innerWidth < 1100);
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  });
  //   <div class="container">
  // <div class="card">
  // <h3 class="title">React</h3>
  // <div class="bar">
  //   <div class="emptybar"></div>
  //   <div class="filledbar"></div>
  // </div>
  // <div class="circle">
  //   <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  //     <circle class="stroke" cx="60" cy="60" r="50"/>
  //   </svg>
  // </div>
  const portfolioList = projectsData.map(project => {
    return (
      <div key={uuid()} >
        <Project className='card' {...project} />
      </div>
    );
  });
  
  return (
    <div id='projects'className="container h-100 justify-content-center">
      {portfolioList} 
    </div>
  );
};
  
export default withRouter(ListProjects);
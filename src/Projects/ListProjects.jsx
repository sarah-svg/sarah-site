import React, { useState, useEffect } from 'react';
import { projectsData } from './data';
import { Project } from './Project';
import uuid from 'react-uuid';
import './Projects.scss';
import { Link } from 'react-router-dom';


export default function ListProjects() {
  const [isMobile, setMobile] = useState(window.innerWidth < 1100);

  const handleMobile = () => {
    setMobile(window.innerWidth < 1100);
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  });
  
  const portfolioList = projectsData.map(project => {
    return (
      <div key={uuid()} className="projectItem">
        <Project {...project} />
      </div>
    );
  });
  
  return (
    <div className="portfolioContainer">
      <Link className="Link" to="/">HOME</Link>
      {/* <h1 className='titleLeft'>
              PROJECTS
      </h1> */}
      <section className='portfolioMain'>
        {isMobile 
          && <div className='titleTop'>PROJECTS</div>}
        <section className='portfolioGrid'>
          {portfolioList}
        </section>
      </section>
    </div>
  );
};
  

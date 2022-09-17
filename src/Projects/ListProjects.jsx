import React from 'react';
import { projectsData } from './data';
import { Project } from './Project';
import uuid from 'react-uuid';
import './Projects.scss';
import { withRouter, NavLink } from 'react-router-dom';


function ListProjects() {

  const portfolioList = projectsData.map(project => {
    return (
      <>
     
        <div key={uuid()} >
          <Project className='card' {...project} />
        </div>
      </>
    
    );
  });
  
  return (
    <div id='projects' className="container d-block">
      <div className='nav d-flex justify-content-end' id='headerr'><NavLink to='/'>Home</NavLink></div>
    
      {portfolioList} 
    </div>
  );
};
  
export default withRouter(ListProjects);
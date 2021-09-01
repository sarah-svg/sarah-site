/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


//import PropTypes from 'prop-types';
import './Projects.scss';




function ProjectList({ projects }) {
  console.log(projects, 'list page');
  const elements = projects.map((project) => {
    return <li className="Projects"key={project.name}>
      <div className="name">{project.name}</div>
      <img className="img"alt={project.name} src={project.demo}>
      </img>
      <p className="desc">{project.desc}</p>
      <a href={project.repo} alt={project.repo}>GitHub</a> <br></br>
      <a href={project.site} alt={project.site}>Deployed</a>
    </li>;
  });
  return (
    
    <ul className="Projects-body" >
      {elements}      
    </ul>
  );
}

ProjectList.propTypes = {

};

export default ProjectList;

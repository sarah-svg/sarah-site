import React from 'react';
import { Project } from './Project';
import Popup from 'reactjs-popup';
import './Projects.scss';
const ProjectDetails = (project) => {
  return (
    <>
      <figcaption>
        <div className="projectName">{project.name}</div>
      </figcaption>

      <figure className="projectFigure">
        <Popup 
          modal
          closeOnDocumentClick={true}
          trigger={open => (
            <img
              open={open}
              className="projectImage"
              src={project.demo}
              alt={project.name} 
              height="200em"/>
          )}>
          {close => (
            <Project 
              {...project} 
              close={close}/>
          )}
        </Popup>
      </figure>
    </>
  );
};

export default ProjectDetails;
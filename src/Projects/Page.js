import React from 'react';
import { projectsData } from './data';
import ProjectList from './ProjectList';
import './Projects.scss';
console.log(projectsData, 'data');

export default function Page() {
  return (
    <div name="page"className="page-container">

      <ProjectList projects={projectsData}/>
    </div>
  );
}

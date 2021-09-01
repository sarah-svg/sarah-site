import React from 'react';
import { projectsData } from './data';
import ProjectList from './ProjectList';
import './Projects.scss';
console.log(projectsData, 'data');

export default function Page() {
  return (
    <div className="page-container page">

      <ProjectList projects={projectsData}/>
    </div>
  );
}

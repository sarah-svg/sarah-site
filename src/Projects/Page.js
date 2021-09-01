import React from 'react';
import { projectsData } from './data';
import ProjectList from './ProjectList';

console.log(projectsData, 'data');

export default function Page() {
  return (
    <div>

      <ProjectList projects={projectsData}/>
    </div>
  );
}

import React from 'react';

import './Projects.scss';



export const Project = ({ close, name, demo, repo, site, desc }) => {


  const handleRepo = () => {
    window.open(repo);

  }; 
  const handleSite = () => {
    window.open(site);
  };

  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <img src={demo} alt={name} className="image"/>
      <span className="description">{desc}</span>
      <section className="detailsFooter">
        <>
          <button 
            className="link"
            onClick={handleSite}>Deployed
            {/* <img src="./git.png" alt="icon link to Sarah's github" height="2px"/> */}   
          </button>
          <span>&nbsp; | &nbsp;</span>
        </>
        
        <button 
          className="link"
          onClick={handleRepo}>GitHub</button>
      </section>



    </div>
  );
};


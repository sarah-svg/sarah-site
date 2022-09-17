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
    <div className="card ">
      <div className='d-flex justify-content-between'> 
        <h2 style={{ fontWeight: 'bolder' }} className="name">{name}</h2>
        <img src={demo} alt={name} className="image"/>
      </div>
  
      <p className="description">{desc}</p>
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


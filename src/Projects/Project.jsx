import React from 'react';

import './2.scss';



export const Project = ({ close, name, demo, repo, site, desc }) => {


  const handleRepo = () => {
    window.open(repo);

  }; 
  const handleSite = () => {
    window.open(site);
  };

  return (
    <div className="contain">
     
      <svg 
        className="close"
        file="none"
        stroke="currentColor"
        viewBox= " 0 0 0 0"
        xmlns="http://www.w3.org/2000/svg"
        height = "1.5em"
        onClick={close}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <h2 className="name">{name}</h2>
      <img src={demo} alt={name}height="250vh" className="image"/>
      {/* <div className="technologies">technologies.................</div> */}
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


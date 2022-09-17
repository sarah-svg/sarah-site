import React from 'react';
import './Contact.scss';

export default function Contact() {

  const git = 'https://github.com/sarah-svg';
  const handleMainGit = () => {
    window.open(git);
  };
  const linkdin = 'https://www.linkedin.com/in/sarah-skillen/';
  const handleLinkden = () => {
    window.open(linkdin);
  };
  const email = 'mailto: kjskillen@gmail.com';
  const handleEmail = () => {
    window.open(email);
  };

  return (
    <>
      <div className="d-flex contact" name="contact">
        <div className="column">
          {/* <a href="mailto: kjskillen@gmail.com" > */}
          <button onClick={handleEmail}>
            <img className="imgHeader" src="./mail.svg" alt="icon link to Sarah's email" /></button>
          {/* </a> */}
        </div>
        <div className="column">
          {/* <a href="https://www.linkedin.com/in/sarah-skillen/" > */}
          <button className="button" onClick={handleLinkden}>
            <img className="imgHeader" src="./linkedin.svg" alt="icon link to sarah's linkedin" /></button>
          {/* </a> */}
        </div> 
        <div className="column">
          {/* <a href="https://github.com/sarah-svg"> */}
          <button onClick={handleMainGit}>
            <img className="imgHeader" src="./git.svg" alt="icon link to Sarah's github" />
          </button>
         
          {/* </a> */}
        </div>    
      </div>   
   
    </>
  );
}
 
// eslint-disable-next-line no-lone-blocks
{/* <a href="./resume2.pdf">/in/sarahskillen
kjskillen@gmail.com /sarah-svg
              <img src="./resume2.png" alt="icon link to Sarah's resume" />
                        Resume
            </a> */}
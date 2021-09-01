import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <>
      <div className="Contact" name="contact">
  

   
        <div className="column">
          <a href="mailto: kjskillen@gmail.com" >
            <img src="./email.png" alt="icon link to Sarah's email" /></a>
        </div>
        <div className="column">
          <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/" >
            <img src="./linkdin.png" alt="icon link to sarah's linkedin" /></a>
        </div> 
        <div className="column">
          <a href="https://github.com/sarah-svg">
            <img src="./git.png" alt="icon link to Sarah's github" /></a>
        </div>   
   
        <span className="tooltip-text"></span>
   
      </div>   
      <p> Created by Sarah Skillen &#169; 2021 </p> 

    </>
  );
}
 
// eslint-disable-next-line no-lone-blocks
{/* <a href="./resume2.pdf">/in/sarahskillen
kjskillen@gmail.com /sarah-svg
              <img src="./resume2.png" alt="icon link to Sarah's resume" />
                        Resume
            </a> */}
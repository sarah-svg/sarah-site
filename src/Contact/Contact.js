import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="Contact" name="contact">
      <div className="inner1">
        <div className="content">

          <p>Reach me at:</p>

          <p>
            <a href="mailto: kjskillen@gmail.com">
              <img src="./email.png" alt="icon link to Sarah's email" />
                        kjskillen@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
              <img src="./linkdin.png" alt="icon link to sarah's linkedin" />
                        /in/sarahskillen
            </a>
          </p>
          <p>
            <a href="https://github.com/sarah-svg">
              <img src="./git.png" alt="icon link to Sarah's github" />
                        /sarah-svg
            </a>
          </p>
          <p className="tooltip">
            <a href="./resume2.pdf">
              <img src="./resume2.png" alt="icon link to Sarah's resume" />
                        Resume
            </a>
            <span className="tooltip-text"></span>
          </p>
        </div>

      </div>
    </div>
  );
}

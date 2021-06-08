import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="Contact" name="contact">
      <div className="inner">
        <div className="content">
          <p>Let's connect</p>
          <p>
            <a href="mailto: kjskillen@gmail.com">
              <img src="./email-dark.png" alt="icon link to Sarah's email" />
                        kjskillen@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
              <img src="./linkedin-dark.png" alt="icon link to Sarah's linkedin" />
                        /in/sarahSkillen
            </a>
          </p>
          <p>
            <a href="https://github.com/sarah-svg">
              <img src="./github-dark.png" alt="icon link to Sarah's github" />
                        /sarahSkillen
            </a>
          </p>
          <p className="tooltip">
            <a href="https://drive.google.com/file/d/1YFJ_iUf0vYTl0jDDTxiUMfhOWdTg8pe8/view?usp=sharing">
              <img src="./cv-light.png" alt="icon link to Sarah's resume" />
                        Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Frameworks from '../Main/framworks';
import './About.scss';

export default function About() {
  return (
    <div className="About" name="about" id='about'>

      <div className="p"> 
       I am a hardworking creative <span className="job">Software Engineer</span> who loves the outdoors and solving problems.
       After working as a cosmetologist for over a decade and then transitioning to becoming a Software Engineer. I have an eye for detail, the skills to adapt and overcome anything, and a passion to learn as much as I can. 
      </div>
      <Frameworks/>
    </div>
  );
}

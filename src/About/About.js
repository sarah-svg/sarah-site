import React from 'react';
import Frameworks from '../Main/framworks';
import './About.scss';

export default function About() {
  return (
    <div className="About" name="about" id='about'>

      <div className="p"> 
       I am a hardworking creative <span className="job">Software Engineer</span> who loves the outdoors and solving problems.
       After working as a cosmetologist for the past decade, I am a people person who has a passion for code and learning as much as I can.
        I have an amazing skill of talking and understanding my surroundings and making it creative and learning at the same time. Creative,
        transformative go-getter and problem solver, vicarious team builder, hopeful, and an open collaborator.
      </div>
      <Frameworks/>
    </div>
  );
}

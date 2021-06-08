import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import Background from '../Background/Background';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
export default function Home() {
   
  useEffect(function onFirstMount() {

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      const arrow = document.querySelector('.arrow');

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        arrow.classList.add('hidden');
      } else {
        arrow.classList.remove('hidden');
      }
    }
  
    window.addEventListener('scroll', scrollFunction);
    
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    }
  }, []);
  return (
    <div>
      <div className='Landing' name='home'>
        <div className='landing-group'>
          <div className='landing-header'>
        
            <p className='name'>Sarah Skillen</p>
          </div>
          <p className='title'>Full Stack Software Engineer</p>

          <div className='arrow'>
            <Link activeClass='active' to='about' smooth={true} >
            </Link>
          </div>
        </div>
      </div>
      <Background/>
      <Contact/>
      <Projects />
      {/* <About />
      <Mission />
      <Projects />
      <Contact /> */}
      
      <div className='footer'>
      </div>
    </div>
  );
}

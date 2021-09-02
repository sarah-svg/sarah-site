import { useEffect } from 'react';
import { Link } from 'react-scroll';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Frameworks from './framworks';
import Page from '../Projects/Page';



import './Main.scss';
import About from '../About/About';

function Main() {

  useEffect(function onFirstMount() {

    window.onscroll = function() {scrollFunction();};
        
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
    };
  }, []);

  return (
    <div className="Main">
      <Header />
      <p></p>
      <div className="Landing" name="home">
        <div className="landing-group">
          <div className="landing-header">
            <div className="typewriter">
              <h1 className="name">Sarah Skillen</h1>
            </div>
               
            {/* <p className="title">Full Stack Software Engineer</p>  */}
            <Frameworks/>
          </div> 
        </div>
        <div className="arrow">
          <Link activeClass="active" to="footer" smooth={true} >
            <img src="./arrow.png" alt="down arrow" />
          </Link>
        </div>
      </div>
      <About />  
    
      <Page />
    
     
      <Footer/>
    </div>
  );
}

export default Main;

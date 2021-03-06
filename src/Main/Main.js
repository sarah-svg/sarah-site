
import { Link } from 'react-scroll';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Frameworks from './framworks';
import './Main.scss';
import About from '../About/About';


function Main() {
  return (
    <div>
      <div className="Main">
        <div className="shine">
          <Header />
          <p></p>
          <div className="Landing" name="home">
            <div className="landing-group">
              <div className="landing-header">
                <div className="typewriter">
                  <h1 className="name">Sarah Skillen</h1>
                </div>
                <Frameworks/>
              </div> 
            </div>
            <div className="arrow">
              <Link activeClass="active" to="about" smooth={true} >
                <img src="./arrow.png" alt="down arrow" />
              </Link>
            </div>
          </div>
          <About />   
          <Footer/>
        </div>
      </div>
      <p className='P'> Created by Sarah Skillen &#169; 2021 </p> 
    </div>
  );
}

export default Main;

/* eslint-disable no-unused-vars */

import './Main.scss';
import About from '../About/About';
import Frameworks from './framworks';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main() {
  return (
    <div className='d-flex h-100 w-100 flex-grow-0 flex-wrap body'>
      <Header/>
      <div className="Main">
        <div className="typewriter">
          <h1 className="name" style={{ fontWeight: 'bolder' } } >Sarah Skillen</h1>
          <About />     
        </div>    
      </div>
    </div>
  );
}

export default Main;

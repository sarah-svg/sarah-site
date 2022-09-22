/* eslint-disable no-unused-vars */

import './Main.scss';
import About from '../About/About';
import Frameworks from './framworks';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main() {
  return (
    <div className=' h-100 w-100 d-flex flex-grow-0 flex-wrap'>
      <Header/>
      <div className="Main">
        <div className="typewriter">
          <h1 className="name" style={{ fontWeight: 'bolder' }} >Sarah Skillen</h1>
          <div className='d-flex flex-wrap'>
            <div style={{ margin:'1rem' }}>
              <img src='./me.svg' alt='me' className='me' />
            </div>
            <About />
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Main;

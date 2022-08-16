
import './Main.scss';
import About from '../About/About';
import Frameworks from './framworks';


function Main() {
  return (
    <div className='d-flex h-100 w-100 flex-grow-0'>
      <div className="Main">
        <div className="shine gradient-background">
      
          <p></p>
          <div className="Landing" name="home">
            <div className="landing-group">
              <div className="landing-header">
                <div className="typewriter">
                  <h1 className="name">Sarah Skillen</h1>
                </div>
         
              </div> 
            </div>
            <div className="arrow">
          
            </div>
          </div>
          <About />   
          <Frameworks/> 
        </div>
   
      </div>
    </div>
  );
}

export default Main;

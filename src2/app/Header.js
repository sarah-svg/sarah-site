import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import layers from "./img/layers.png";
import pen from "./img/pen.png";
import cogwheel from "./img/cogwheel.png";




class Header extends Component {

  render() { 
    return (
      <div className="Header">
        <Link to='/background'>About Me
        <div className="containor1">
						<img src={layers} alt=""/>
					</div>
        </Link>
        <br></br>
        <Link to='/projects'>Projects
        <div className="containor2">
			  <img src={cogwheel} alt=""/>
					</div></Link>		
        <br></br>
        <Link to='/contact'>Contact
        <div className="containor3">
        <img src={pen} alt=""/>
				</div></Link>
        <br></br>
      </div>
    );
  }

}
 
export default Header;
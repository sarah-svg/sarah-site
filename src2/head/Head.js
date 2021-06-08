import React from 'react';
import { Link } from 'react-scroll';
import './Head.scss'

export default function Home() {
    return (
        <div className='Header' id='Header'>
            <div className='logo'>
                <a href='/'>
                    <img src='./logo.png' alt='logo with b' />
                </a>
            </div>

            <div className='nav'>
                <Link activeClass="active" 
                    to="home" 
                    smooth={true}
                    className="nav-link">Home</Link>
                <Link activeClass="active" 
                    to="about" 
                    smooth={true}
                    className="nav-link">About</Link>
                <Link activeClass="active" 
                    to="projects" 
                    smooth={true}
                    className="nav-link">Projects</Link>
                <Link activeClass="active" 
                    to="contact" 
                    smooth={true}
                    className="nav-link">Connect</Link>
            </div>
        </div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Link activeClass="active" to="about" smooth={true} >
        <img src="./arrow.png" alt="down arrow" />
      </Link>
    </div>
  );
}

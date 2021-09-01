import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

console.log('hello i fucking here projects');
function Project() {
  const { name } = this.props.name;

  return (
    <figure>
      <h1>{name}</h1>
      {/* <img src={demo} alt={demo}/> */}
      {/* <Link to={site}></Link>  */}
      {/* <p>{desc}</p>  */}
    </figure>
  );
}

// Project.propTypes = {

// };

export default Project;


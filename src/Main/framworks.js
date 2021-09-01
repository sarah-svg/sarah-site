import React from 'react';

import './Main.scss';
const lang = ['React', 'Node', 'Express', 'SCSS', 'JavaScript'];



function Frameworks() {
  const mapped = lang.map((index) => {
    return <li className="list-lan"key={index}><span>-</span>{index}-</li>;
  });

  return (
    <ul className="lang">{mapped}</ul>
  );
}

export default Frameworks;
    // <div className="lang">
    //   <div>{}</div> 
    //   <div>{}</div>
    //   <div>{}</div>
    //   <div>{}</div>
    // </div>
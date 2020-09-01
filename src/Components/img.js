import React from 'react';
import '../App.css';


const Img = () => {
  return (
    <div>
    <img src={require('../img/shoe2.jpg')} style={{width:600}} className="mb-3"/>
    </div>
  );
}

export default Img;

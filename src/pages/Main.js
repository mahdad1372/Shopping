import React from 'react';
import Navbar from '../Components/Navbar2';
import Slider from '../Components/Slider';
import Title from '../Components/Title';
import Newarrivels from '../Components/Newarrivels';
import Deals from '../Components/Deals';
import '../App.css';

const  Main = () => {
  return (
    <div>

     <Slider />
     <Title />
     <Newarrivels />
     <Deals />
    
    </div>
  );
}

export default Main;
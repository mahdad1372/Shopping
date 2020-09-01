import React from 'react';

import {Switch , Route ,BrowserRouter } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';
import Shoe from '../pages/Shop';
import Main from './Main';
import Slides from './Slides';
import Img from '../Components/img';
import { Navbar } from 'react-bootstrap';

const Route2 = () => {
  return (
    <div className="App">
        
      <BrowserRouter>
      {window.location.pathname === "/" || window.location.pathname === "/shop" ? (
        <Navbar2/>
      ) : (
        null
      )}
      {/* <Navbar2/> */}
      <Route exact path="/" component={()=>(<Main />)} />
      <Route path="/shop" component={()=>( window.location.pathname === "/shop" ?(<Shoe />): null)} />
      <Route path="/shop/slides" component={()=>(<Slides />)} />
      <Route path="/img" component={()=>(<Img />)} />
      {window.location.pathname === "/" || window.location.pathname === "/shop" ? (
        <Footer/>
      ) : (
        null
      )}
      {/* <Footer/> */}
      </BrowserRouter> 
      
    </div>
  );
}

export default Route2;

import React, { Component } from 'react';
import { Button , Navbar , Nav , NavDropdown , Form } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import '../App.css';

class Header extends Component{

    render(){
      
        return(
            <div > 
<Navbar bg="white" expand="lg">
  <Navbar.Brand href="#home"><img src={require('../img/novin.png')} style={{width:92}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <div class="p-2 text15 ml-auto"><Link to="/" className="text15"><a>Home</a></Link></div>
  <div class="p-2"><Link to="/shop" className="text15"><a>Shop</a></Link></div>
  <div class="p-2 text15"><a>Sale</a></div>
  <div class="p-2 text15"><a>Features</a></div>
  <div class="p-2 text15"><a>Login</a></div>
  <div class="p-2 text15"><a>Register</a></div>
  <div class="p-2 text15"><a>Contact</a></div>
  <div class="p-2 text15 text-style"><a>About us</a></div>
  <div class="p-2 text15"><i class="fas fa-2x fa-user"></i></div>
  <div class="p-2 text15"><i class="fas fa-2x fa-shopping-bag"></i></div>

  </Navbar.Collapse>
</Navbar>
         </div>
        )
    }
}

export default Header;
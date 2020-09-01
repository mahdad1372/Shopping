import React from 'react';
import '../App.css';


function App() {
  return (
    <div>
     <div class="d-flex navbar">
  <div class="p-2 mr-auto">
    <img src={require('../img/novin.png')} style={{width:92}}/>
  </div>
  <div class="p-2"><a>Home</a></div>
  <div class="p-2"><a>Shop</a></div>
  <div class="p-2"><a>Sale</a></div>
  <div class="p-2"><a>Features</a></div>
  <div class="p-2"><a>Login</a></div>
  <div class="p-2"><a>Register</a></div>
  <div class="p-2"><a>Contact</a></div>
  <div class="p-2 text-style"><a>About us</a></div>
  <div class="p-2"><i class="fas fa-2x fa-user"></i></div>
  <div class="p-2"><i class="fas fa-2x fa-shopping-bag"></i></div>
  
</div>
    </div>
  );
}

export default App;

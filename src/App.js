import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    //dark- navbar dark theme
    //adding navbar reactstrap component in react app
    <div> 
     <Navbar dark color="dark">
       <div className = "container">
         <NavbarBrand href ="/"> Ristorante Con Fusion
         </NavbarBrand>

       </div>
     </Navbar>
      <Menu/>
    </div>
  ); // Menu component  rendered below navbar
}

export default App;

import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

import {Navbar, NavbarBrand} from 'reactstrap';

import {DISHES} from './shared/dishes';


class App extends Component {
  
    constructor(props){
      super(props);
      
      this.state={
        dishes:DISHES
      }; // now state info contains all the dishes
      // will now be made available to the menucomponent as props
    }

    render(){
      return(
    //adding navbar reactstrap component in react app
    <div> 
     <Navbar dark color="dark">
       <div className = "container">
         <NavbarBrand href ="/"> Ristorante Con Fusion
         </NavbarBrand>
       </div>
     </Navbar>

      <Menu dishes= {this.state.dishes} />
    </div>
    )
  } // Menu component  rendered below navbar
};

export default App;

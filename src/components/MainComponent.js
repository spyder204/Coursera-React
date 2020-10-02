import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import {Switch, Route, Redirect} from 'react-router-dom';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
//        selectedDish: null
    };
  }


  render() {
    
    const Homepage = ()=>{
      return(
        <Home/>
      );
      
    }// we can also do this like done in Menu route.

    return (
      <div>
        <Header/>
          <Switch>
            
            <Route path = "/home" component= {Homepage} />
            <Route exact path = "/menu" component= { ()=><Menu dishes = {this.state.dishes} /> } />
            {
            // exact-- means path should exactly match, nothing ahead /menu
            //component= {Menu}--- wrong approach---- as we would not be able to pass
            // props to the MenuComponent.
            // so we make a Function component Menu and we are able to pass the props.
            }
            <Redirect to = "/home" />
            {
              // if routes don't match, redirected to HomePage
            }
          
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main; 
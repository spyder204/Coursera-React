import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';


import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import Contact from './ContactComponent';
import About from './AboutComponent'

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
//withRouter -- to connect react component to redux
import {connect} from 'react-redux';


const mapStateToProps = (state)=>{
  //map redux store state into props that will become available to the components
  return{
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
} 
// now we'' connect Main component to the redux store. At the bottom



class Main extends Component {

  constructor(props) {
    super(props);
   /* 
   this.state = {
      // state moved to reducer.js
        
    };
    */
  }

  render() {
    
    const Homepage = ()=>{
      return(
        <Home  dish = {this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion = {this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader = {this.props.leaders.filter((leader)=>leader.featured)[0]}
        
        />// filter will return an array
        // now these will be passed as props to the home component, make apt changes there
        );
      
    }// we can also do this like done in Menu route.

    const DishWithId = ({match})=>{
      console.log(parseInt(match.params.dishId, 10));
      // route will pass 3 props here-match, location, history,. we want match only
      return(
        <DishDetail 
        dish = {this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId, 10))[0]} 
        
        comments = {this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId, 10))}
        />)
    }

    return (
      <div>
        <Header/>
          <Switch>
            
            <Route path = "/home" component= {Homepage} />
            <Route exact path = "/menu" component = { ()=><Menu dishes = {this.props.dishes} /> } />
            {
            // exact-- means path should exactly match, nothing ahead /menu
            //component= {Menu}--- wrong approach---- as we would not be able to pass
            // props to the MenuComponent.
            // so we make a Function component Menu and we are able to pass the props.
            }

            <Route exact path = "/contactus" component = {Contact} />

            <Route path = '/menu/:dishId' component={DishWithId}/>

            <Route exact path = "/aboutus" component = { ()=><About leaders = {this.props.leaders}/>} /> 
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

//export default Main; 
export default withRouter(connect(mapStateToProps)(Main));
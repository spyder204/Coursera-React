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
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders,postFeedback } from '../redux/ActionCreators';
// we need this to obtain action to dispatch to store
import {TransitionGroup, CSSTransition} from 'react-transition-group'

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

const mapDispatchToProps = (dispatch)=>({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  // ^ dispatching the action ... addComment -action creator- will return an action object to add a comment
  //dispatch function obtains that action object as the parameter
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders:()=>dispatch(fetchLeaders()),
  postFeedback: (firstname, lastname, phone, email, message, agree, contactType ) => 
    dispatch(postFeedback(firstname, lastname, phone, email, message, agree, contactType)),
});


class Main extends Component {

  constructor(props) {
    super(props);
   /* 
   this.state = {
      // state moved to reducer.js
        
    };
    */
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    
    const Homepage = ()=>{
      return(
        <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
             
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}

              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess ={this.props.leaders.errMess}
          />// filter will return an array
        // now these will be passed as props to the home component, make apt changes there
        );
      
    }// we can also do this like done in Menu route.

    const DishWithId = ({match})=>{
      console.log(parseInt(match.params.dishId, 10));
      // route will pass 3 props here-match, location, history,. we want match only
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
           
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
          />)
    }

    return (
      <div> 
        <Header/>
          <TransitionGroup> 
            {//wherever you want to apply animation, put that within TransitionGroup
            }
              <CSSTransition key = {this.props.location.key} classNames='page' timeout={300}>
                <Switch location={this.props.location} >
                  
                  <Route path = "/home" component= {Homepage} />
                  <Route exact path = "/menu" component = { ()=><Menu dishes = {this.props.dishes} /> } />
                  {
                  // exact-- means path should exactly match, nothing ahead /menu
                  //component= {Menu}--- wrong approach---- as we would not be able to pass
                  // props to the MenuComponent.
                  // so we make a Function component Menu and we are able to pass the props.
                  }
                  <Route exact path = "/contactus" component = {()=> <Contact postFeedback={this.props.postFeedback}/>} />
                  <Route path = '/menu/:dishId' component={DishWithId}/>
                  <Route exact path = "/aboutus" component = { ()=><About leaders = {this.props.leaders}/>} /> 
                  <Redirect to = "/home" />
                  {
                    // if routes don't match, redirected to HomePage
                  }
                
                </Switch>
              </CSSTransition>
            </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

//export default Main; 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// now addCommment function is available in MainComponent, and can be used
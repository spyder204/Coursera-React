import React, {Component} from 'react';
//import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from "./DishdetailComponent";
import {DISHES} from "../shared/dishes";
class Menu extends Component{ // creating a new component

    //defining a constructor
    constructor(props){
        super(props);
       // these steps are reqd. always
    
        //defining a state for the component
        //stores properties for the component
        this.state={
            dishes:DISHES,
            selectedDish:null
          };

    }
   

    //to render details of the selected dish
    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%"  object src = {dish.image} alt = {dish.name}/>                  
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>    
                </Card>
                
            );

        }
        else{
            return (<div></div>);   // returning empty div 
        }
    }
    
    render(){



        const menu = this.props.dishes.map((dish)=>{
            return( 
                //mt-5 means top margin of 5 units- some bootstrap
                // media class renders each item in the menu
                // li denotes each is a list item 
                //ml-5 left margin of 5
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                    
                    <Card key = {dish.id} onClick = {()=>this.props.onClick(dish.id)}>
                        <CardImg width="100%"  object src = {dish.image} alt = {dish.name}/>
                        
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                            
                         </CardImgOverlay>
                    
                    </Card>
                </div>
            ) 
            
            // in a list of items we create in react, each item requires a key attribute to be specified
            //key helps react to recognize these items uniquely when react is rendering them on the screen.
        });
        return(
            <div className = 'container'>
                <div className='row'>  
                    {menu}          
                </div>
                <div className='col-sm-6'>
               
                </div>
            </div>
        ); //passing prop above
    }
}


export default Menu;
//import Menu in app.js
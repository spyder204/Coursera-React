import React from 'react';
//import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// defining a functional component 

function RenderMenuItem({dish, onClick}) {     // destructuring props

    return(
        <Card key = {dish.id} onClick = {()=>onClick(dish.id)}>
        <CardImg width="100%"  object src = {dish.image} alt = {dish.name}/>
        
        <CardImgOverlay>
            <CardTitle heading>{dish.name}</CardTitle>        
         </CardImgOverlay>
   
    </Card>
    );

} // func component ready

const Menu = (props)=>{        // another way of defining functional components

    const menu = props.dishes.map((dish)=>{
        return( 
            //mt-5 means top margin of 5 units- some bootstrap
            // media class renders each item in the menu
            // li denotes each is a list item 
            //ml-5 left margin of 5
            <div key = {dish.id} className="col-12 col-md-5 m-1">
            {
            // using above functional component- down below
            }
            <RenderMenuItem dish = {dish} onClick = {props.onClick} />
            </div>
        );
    });
    
    return(
        <div className = 'container'>
            <div className='row'>  
                {menu}          
            </div>
        </div>
    );
    
};











/*
class Menu extends Component{ // creating a new component    
    //to render details of the selected dish
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
*/

export default Menu;
//import Menu in app.js
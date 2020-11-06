import React from 'react';
//import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';

// defining a functional component 
function RenderMenuItem({dish, onClick}) {     // destructuring props

    return(
        <Card>
        <Link to ={`/menu/${dish.id}`}>
        
        <CardImg width="100%"  object src = {dish.image} alt = {dish.name}/>
        <CardImgOverlay>
            <CardTitle heading>{dish.name}</CardTitle>        
         </CardImgOverlay>
        
        </Link>
    </Card>
    );

} // func component ready

const Menu = (props)=>{   // another way of defining functional components

    const menu = props.dishes.dishes.map((dish)=>{
        return( 
            //mt-5 means top margin of 5 units- some bootstrap
            // media class renders each item in the menu
            // li denotes each is a list item 
            //ml-5 left margin of 5
            <div key = {dish.id} className="col-12 col-md-5 m-1">
            {
            // using above functional component- down below
            }
            <RenderMenuItem dish = {dish} />
            </div>
        );
    });
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
            
        return(
            <div className = 'container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>  
                    </BreadcrumbItem>

                    <BreadcrumbItem active>Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
                <div className='row'>
                    {menu}
                </div>
            </div>
        );
    }
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
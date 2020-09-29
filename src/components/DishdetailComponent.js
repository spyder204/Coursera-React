import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDishCard({dish}){  // dish = props here . destructured
        if(dish==null)
            return(<div></div>);
        else{
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%"  object src = {dish.image} alt = {dish.name}/>                  
                        <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>     
            </Card>
                </div>
            );
        }

    }


    function RenderComments(dish){
        
        if(dish==null)
            return (<div></div>);
        
            else{

            let commentdata = dish.comments.map((com)=>{
                return(
                    <li key = {com.id}>
                        <p>{com.comment} :- {com.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(com.date)))} </p>
                    </li>
                );
            })
           
                    
            return(
                
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {commentdata}; 
                    </ul>
                </div>
            );
        }

    }
    
   const DishDetail = (props)=> {
        console.log("DishDetail Render invoked.");
        // if no card is selected, then null prop will be passed which will throw an error
        if(props.dish!=null){

         return(
                <div className='container'>
                    <div className='row'>
                    <RenderDishCard dish = {props.dish} />   
                    <RenderComments comments = {props.dish.comments} />
                 
                    
                </div>
                </div>
            );
        }     
        else
            return(<div></div>);
        
    }
    


export default DishDetail;
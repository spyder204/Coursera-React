import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}){ // will receive props here- item, destructured
    return( // we are using the same Card structure to render leader, dishes, promotions
        <Card>
            <CardImg src = {item.image} alt = {item.name} />
           <CardBody>
           <CardTitle className='card-title'>{item.name}</CardTitle>
            { item.designation ? <CardSubtitle className="card-subtitle">{item.designation}</CardSubtitle>:null }
            {
             // in leader file- there's a designation for leaders
             // no designation for dishes, promotions
             //  see that ques mark before <CardSubtitle> ?
             // we are checking if item.designation == null, if not, render it otherwise render it as null
            }
            <CardText>{item.description}</CardText>
           </CardBody>
        </Card>
 
    );

}



function Home(props){
    return(
        <div className= 'container'>
            <div className= 'row align-items-start'>
                 <div className="column-12 col-md m-1">
                     <RenderCard item = {props.dish} />
                 </div>
                 
                 <div className="column-12 col-md m-1">
                     <RenderCard item = {props.leader} />
                 </div>
                 
                 <div className="column-12 col-md m-1">
                     <RenderCard item = {props.promotion} />
                 </div>
            </div>
        </div>


    );
}
export default Home;
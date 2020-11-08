import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components'
function RenderCard({item, isLoading, errMess}){ // will receive props here- item, destructured
    
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else {

        return( // we are using the same Card structure to render leader, dishes, promotions
            <FadeTransform in 
            transformProps = {{
                exitTransform:'scale(0.5) translatey(-50%)'
            }}> 
                <Card>
                    <CardImg src = {baseUrl+item.image} alt = {item.name} />
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
            </FadeTransform>    
        );
    }
}



function Home(props){
    console.log('props-', props)
    return(
        <div className= 'container'>
            <div className= 'row align-items-start'>
                 <div className="column-12 col-md m-1">
                     <RenderCard item = {props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                 </div> 
                 
                 <div className="column-12 col-md m-1">
                     <RenderCard item = {props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/>
                 </div>
                 
                 <div className="column-12 col-md m-1">
                     <RenderCard item = {props.promotion}  isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                 </div>
            </div>
        </div> 


    );
}
export default Home;
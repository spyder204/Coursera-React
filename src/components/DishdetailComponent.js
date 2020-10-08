import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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

    function RenderComments({comments}){
        if(comments==null)
            return (<div></div>);
        
        else{
             let commentdata = comments.map((comments)=>{
                return(
                    <li key = {comments.id}>
                        <div>
                            <p className='comments'>{comments.comment}</p>
                            <p className='commentAuthor'>--{comments.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                    </li>
                )
             })
                         
            return(
                
                <div className=' col-12 col-md-5 m-1'>
                    <h4 className='commentsHeading'>Comments</h4>
                    <ul className='list-unstyled'>
                        {commentdata} 
                    </ul>
                </div>
            );
        }

    }
    
   const DishDetail = (props)=> {
        //console.log("DishDetail Render invoked.");
       console.log("dish detail props ", props.comments);
        // if no card is selected, then null prop will be passed which will throw an error
        if(props.dish!=null){

         return(
                <div className='container'>
                    <div className='row'>
               <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/home'>Home</Link>  
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to='/menu'>Menu</Link>  
                </BreadcrumbItem>

                <BreadcrumbItem active>{props.dish.name}
                </BreadcrumbItem>
               </Breadcrumb>
               
               <div className='col-12'>
                   <h3>{props.dish.name}</h3>
                   <hr/>
               </div>
           </div>
                    <div className='row'>
                        <RenderDishCard dish = {props.dish} />   
                        <RenderComments comments = {props.comments} />
                    </div>
                </div>
            );
        }     
        else
            return(<div></div>);
        
    }
    


export default DishDetail;
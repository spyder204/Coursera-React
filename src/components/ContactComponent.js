import React from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {Link} from 'react-router-dom';


// for forms === we need a class component as we need to store the state of the form in our contact component

class Contact extends React.Component{
    
    //to store state, create a constructor
    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:''
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event){
        const target = event.target; // event carries which particular input has been changed
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // if it is a checkbox, then the value is retrieved from target.checked, else from target.value
        const name = target.name;

        this.setState({
            [name] : value

        });

    }

    handleSubmit(event){
        console.log("Current state is ", JSON.stringify( this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault(); // to prevent the default behavior if the event is not handled
        
    }
    
    
    render(){
     return(
        <div className="container">
            <div className='row'>
               <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/home'>Home</Link>  
                </BreadcrumbItem>

                <BreadcrumbItem active>Contact Us
                </BreadcrumbItem>
               </Breadcrumb>
               <div className='col-12'>
                   <h3>Contact Us</h3>
                   <hr/>
               </div>
           </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12'>
                    <h3>Send us your feedback.</h3>
                </div>
                <div className='col-12 col-md-9'>
                    <Form onSubmit ={this.submit}>
                        {// md ={2}--from medium to XL sizes, it occupies two columns
                        }
                        <FormGroup row>    
                            <Label htmlfor='firstName' md={2}>First name : </Label>
                            <Col md= {5}>
                                {
                                    //equivalent to a div with className= 'col-md-5'
                                    // for medium to  XL sizes, this would form a column
                                }
                                <Input type = 'text' id='firstName' name ='firstName' placeholder='enter your first name' value ={this.state.firstName} 
                                onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                    
                        <FormGroup row>    
                            <Label htmlfor='lastName' md={2}>Last name : </Label>
                            <Col md= {5}>
                                <Input type = 'text' id='lastName' name ='lastName' placeholder='enter your last name' value ={this.state.lastName}  onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>    
                            <Label htmlfor='phone' md={2}>Phone number: </Label>
                            <Col md= {5}>          
                                <Input type = 'tel' id='phone' name ='phone' placeholder='enter your phone number' value ={this.state.phone}  onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        
                       <FormGroup row>    
                            <Label htmlfor='email' md={2}>Email: </Label>
                            <Col md= {5}>          
                                <Input type = 'text' id='email' name ='email' placeholder='enter your email' value ={this.state.email}  onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup row>
                            <Col md = {{
                                size:6, 
                                offset:2
                                //occupies 2 columns          
                                }}>
                                <FormGroup check>
                                    <label check>
                                        <Input type ='checkbox' name ='agree' checked={this.state.agree} onChange= {this.handleInputChange} />
                                        May we contact you?
                                    </label>
                                </FormGroup>

                            </Col>
                            <Col md = {{size:3, offset:1}}>
                                <Input type = 'select' name ='contactType' value ={this.state.contactType}  onChange={this.handleInputChange}>
                                    <option> Telephone</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup row>    
                            <Label htmlfor='feedback' md={2}>Any Message?</Label>
                            <Col md= {10}>          
                                <Input type = 'text' id='message' name ='message' placeholder='' row='1' value ={this.state.message}  onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                                <Col md = {{ size:10, offset:2}}>
                                    <Button type ='submit' color='primary' onClick={this.handleSubmit}>
                                        Send
                                    </Button>
                                </Col>
                        </FormGroup>
                    
                    </Form>

                </div>
            </div>
        </div>
    );

    }
}

export default Contact;
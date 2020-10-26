import React from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
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
            message:'',
            touched:{  // to keep a track if a field has been touched or not.
                firstName: false,
                lastName : false,
                phone:false, 
                email:false
                             
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
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
    
    handleBlur = (field)=>(event)=>{   
        this.setState({
            touched:{...this.state.touched, [field]:true}
        }) //invoked whenever an input box has been modified
    }

    //validate the form each time the form has been re-rendered.
    validate(firstName, lastName,phone, email){
        const errors = {
            firstName:'',
            lastName:'',
            phone:'',
            email:''
        };
        if(this.state.touched.firstName && firstName.length<3)
            errors.firstName= 'First name should be greater than 3 characters';
        else if(this.state.touched.firstName && firstName.length > 10)
            errors.firstName= 'First name should be less than 10 characters';
        
        if(this.state.touched.lastName && lastName.length<3)
            errors.firstName= 'lasdt name should be greater than 3 characters';
        else if(this.state.touched.lastName && lastName.length > 10)
            errors.lastName= 'last name should be less than 10 characters';
        
        //checking phone number using regex
        const reg= /^\d+$/;
        if(this.state.touched.phone && !reg.test(phone))
            errors.phone= 'Should contain only number';
        if(this.state.touched.phone && phone.length!==10)
            errors.phone= 'Should have 10 digits';
        
        //checking email
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1) // filter returns an array which should contain 1 @ for an email to be valid
            errors.email='Email should contain an @ sign'

        return errors;

            
        
    }


    render(){

     const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phone, this.state.email) ;  
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
                                <Input type = 'text' id='firstName' 
                                    name ='firstName' 
                                    placeholder='enter your first name' 
                                    value ={this.state.firstName} 
                                    onChange={this.handleInputChange}  
                                    onBlur={this.handleBlur('first name')}
                                    valid ={errors.firstName==='' }
                                    invalid = {errors.firstName!=='' }
                                />
                            <FormFeedback>
                               {errors.firstName} 
                            </FormFeedback>
                            </Col>
                        </FormGroup>
                    
                        <FormGroup row>    
                            <Label htmlfor='lastName' md={2}>Last name : </Label>
                            <Col md= {5}>
                                <Input type = 'text' 
                                    id='lastName' name ='lastName'
                                    placeholder='enter your last name'
                                    value ={this.state.lastName} 
                                    onBlur={this.handleBlur('last name')} 
                                    onChange={this.handleInputChange}
                                    valid ={errors.lastName==='' }
                                    invalid = {errors.lastName!=='' }/>
                                <FormFeedback>
                               {errors.lastName} 
                            </FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>    
                            <Label htmlfor='phone' md={2}>Phone number: </Label>
                            <Col md= {5}>          
                                <Input type = 'tel'
                                    id='phone' name ='phone' 
                                    placeholder='enter your phone number' 
                                    value ={this.state.phone} onBlur={this.handleBlur('phone')} onChange={this.handleInputChange}
                                    valid ={errors.phone==='' }
                                    invalid = {errors.phone!=='' }/>
                                <FormFeedback>
                               {errors.phone} 
                            </FormFeedback>
                            </Col>
                        </FormGroup>
                        
                       <FormGroup row>    
                            <Label htmlfor='email' md={2}>Email: </Label>
                            <Col md= {5}>          
                                <Input type = 'text' 
                                id='email' name ='email' 
                                placeholder='enter your email'
                                 value ={this.state.email} 
                                 onBlur={this.handleBlur('email')} 
                                 onChange={this.handleInputChange}
                                 valid ={errors.email==='' }
                                invalid = {errors.email!=='' }/>
                                <FormFeedback>
                               {errors.email} 
                            </FormFeedback>
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
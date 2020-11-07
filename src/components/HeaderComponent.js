import React, {Component} from 'react';

import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse,
Button,Modal, ModalHeader, ModalBody, FormGroup, Form, Label,Input } from 'reactstrap';

import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state= {
            isNavOpen : false,
            isModalOpen: false
        };
        // binding the toggleNav() down below
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
             
    }   

    handleLogin(event) {
        this.toggleModal(); 
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
    
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
        //toggling modal just like we toggle Nav
    }

     toggleNav(){  // need  to bind this method in ur code to use it in JSX
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
        // can also be done using arrow functions in the JSX, so no need
        // to bind it then.
    }


    render(){
        return(   
            <React.Fragment>
               
               <Navbar dark expand="md">
                   {
                       //navbar expanded only for screen sizes more than medium to XL.
                   }
               <div className="container">
                 <NavbarToggler className='navbar-toggle' onClick = {this.toggleNav} />
     
                 <NavbarBrand classname = 'mr-auto' href="/">
                      <img src = 'assets/images/logo.png' height='30' width='41'/>
                  </NavbarBrand>
                 
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link' to='/home'>
                             <span className="fa fa-home fa-lg"></span> Home
                         </NavLink>
                     </NavItem>
     
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link' to='/menu'>
                             <span className="fa fa-list fa-lg"></span> Menu
                         </NavLink>
                     </NavItem>
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link px-12' to='/contactus'>
                             <span className="fa fa-address-card fa-lg"></span> Contact
                         </NavLink>
                     </NavItem>
     
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link' to='/aboutus'>
                             <span className="fa fa-info fa-lg"></span> About
                         </NavLink>
                     </NavItem>
                  </Nav>
                  {
                      // to toggle Modal, another nav bar is added in which a button is added
                      //ml-auto = left margin max
                  }
                  <Nav className='ml-auto' navbar>
                      <NavItem>
                          <button outline onClick = {this.toggleModal}>
                              <span className = 'fa fa-sign-in fa-lg'></span> Login
                          </button>
                      </NavItem>
                  </Nav>
                  </Collapse>
               </div>
             </Navbar> 
             
             <Jumbotron>
                 <div className = 'container'>
                     <div className = 'row-header'>
                         <div className = ' col-12 col-sm-6'>
                             <h1>
                                 Ristorante ConFusion
                             </h1>
                             <p>Come in for the world's best cuisine experience.</p>
     
                         </div>
                     </div>
                 </div>
             </Jumbotron>
             <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                  <Form onSubmit ={this.handleLogin}>
                      <FormGroup>
                          <Label htmlFor = 'username'> Username : 
                            <Input type = 'text' id='username' name='username' innerRef={(input)=>this.username=input}></Input>
                          {
                              //to retrivve the value from the form, we need its reference
                              // we do it using 'ref' - but in reactstrap 'innerRef' is used
                          }
                          </Label>
                      </FormGroup>

                      <FormGroup>
                          <Label htmlFor = 'password'> Password : 
                            <Input type = 'password' id='password' name='password' innerRef={(input)=>this.password=input}></Input>
                          </Label>
                      </FormGroup>
                      <FormGroup check>
                          <Label check>
                           <input type = 'checkbox' name =' remember' style = {{margin:'0 10px'}} innerRef={(input)=>this.remember=input}></input>
                            Remember me
                           </Label>
                      </FormGroup>
                      <button type = 'submit' value='submit' color ='primary' style={{marginTop:'20px'}}>
                        Login
                      </button>  
                  </Form>
                </ModalBody>
             </Modal>
     
            </React.Fragment>
         );
    }
}

export default Header;
import React, {Component} from 'react';

import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state= {
            isNavOpen : false
        };
        // binding the toggleNav() down below
        this.toggleNav = this.toggleNav.bind(this);
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
                 <NavbarToggler className='navbar-light' onClick = {this.toggleNav} />
     
                 <NavbarBrand classname = 'mr-auto' href="/">
                      <img src = 'assets/images/logo.png' height='30' width='41'/>
                  </NavbarBrand>
                 
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link' to='/home'>
                             <span className="fa fa-home fa-lg"></span>
                         </NavLink>
                     </NavItem>
     
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link' to='/menu'>
                             <span className="fa fa-list fa-lg"></span>
                         </NavLink>
                     </NavItem>
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link px-12' to='/contact'>
                             <span className="fa fa-address-card fa-lg"></span>
                         </NavLink>
                     </NavItem>
     
                     <NavItem className = 'gap-nav'>
                         <NavLink classname = 'nav-link' to='/aboutus'>
                             <span className="fa fa-info fa-lg"></span>
                         </NavLink>
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
     
            </React.Fragment>
         );
    }
}

export default Header;
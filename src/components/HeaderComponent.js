import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

function Header(){
    return(  
       <React.Fragment>
          
          <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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

export default Header;
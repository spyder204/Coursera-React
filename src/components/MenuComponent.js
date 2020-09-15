import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component{ // creating a new component

    //defining a constructor
    constructor(props){
        super(props);
       // these steps are reqd. always
    
        //defining a state for the component
        //stores properties for the component
        this.state = {
            dishes:[
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                 {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                 {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                 {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               
            ]
        };

    }
    render(){

        const menu = this.state.dishes.map((dish)=>{
            return( 
                //mt-5 means top margin of 5 units- some bootstrap
                // media class renders each item in the menu
                // li denotes each is a list item 
                //ml-5 left margin of 5
                <div key = {dish.id} className="col-12 mt-5">
                    
                    <Media tag = "li">
                        <Media left middle >
                            <Media object src = {dish.image} alt = {dish.name}/>
                        </Media>
                        <Media body className = "ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                            
                        </Media>
                    </Media>
                </div>
            ) 
            // in a list of items we create in react, each item requires a key attribute to be specified
            //key helps react to recognize these items uniquely when react is rendering them on the screen.
        });
        return(
            <div className = 'container'>
                <div className='row'>
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        ); 
    }
}


export default Menu;
//import Menu in app.js
//main component will obtain the state from the redux store
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    dishes: DISHES,
    //selectedDish: null
    comments: COMMENTS,
    leaders : LEADERS,
    promotions: PROMOTIONS
}

// reducer function- pure function
//state- current state, action: to give a new state
// current(previous) state is immutable 
export const Reducer = (state = initialState, action) =>{

    // when reducer is called initially at the start of your application,
    // state is uninitialized, so we want to initialize it to the initial state
    // this is done by ---state = initialState-- done above
    //this gives state a default value
 
    return state; // just returning the current state as we have not implemented
    // any action yet
};
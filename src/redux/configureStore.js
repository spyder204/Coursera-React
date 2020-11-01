import {combineReducers, createStore} from 'redux';
import {dishesReducer} from './dishes';
import {commentsReducer} from './comments';
import {promotionsReducer} from './promotions';
import {leadersReducer} from './leaders';

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes: dishesReducer,
            comments: commentsReducer,
            promotions: promotionsReducer,
            leaders: leadersReducer
        })// composing the global state
    );
    return store;
}











/*import {Reducer, initialState}from './reducer';

// we need the above things to configure out store

export const ConfigureStore = () => {

    const store = createStore(Reducer, initialState,);
    return store;
}
// now we'll make changes in the app.js file to use the redux store

*/
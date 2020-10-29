// not necessary to create this file
import {createStore} from 'redux';
import {Reducer, initialState}from './reducer';

// we need the above things to configure out store

export const ConfigureStore = () => {

    const store = createStore(Reducer, initialState,);
    return store;
}
// now we'll make changes in the app.js file to use the redux store
import React, { Component } from 'react';

import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
// so that the redux store is available to all components in the app

import {ConfigureStore }from './redux/configureStore';
const store = ConfigureStore();
class App extends Component {
    render(){
      return(
    <Provider store = {store}>       
    <BrowserRouter>
      <div> 
      <Main/>
    </div>
    </BrowserRouter>
    </Provider> 
    )
  } 
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';


// 0-  Create reducer with initialState
  // reducer is mock (returns initial state)
// 1 - import create store
  // Create Redux store
// 2 - import Provider
  // Wrap App, give it store

// 3 - connect components (state with application)
// 4 - Add events and event handlers in UI
// 5 - Build Action creators (and types)
// 6 - Write reducer logic for the actions
// 7 - Rinse and repeat


//Wrap with Provider
//Use connect to connect state to props (mapStateToProps)

//# State required for
  // car object
    //features need to update based on selection
  //current additional price, based on current upgrade selection
  // "additional features" selected and not selected
  // total amount based on 'base price' and 'additional price'


const store = createStore(reducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);

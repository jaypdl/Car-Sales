import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import carSalesReducer from './reducers/carSalesReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
   carSalesReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// 1. Create initial empty Reducer
// 2. Create Redux Store
      // import createStore
      // import reducer
// 3. Bring in Provider
      // import Provider
// 4. Connect Components
// 5. Add Events and Event handlers
// 6. Build Action Creatirs
// 7. Write Reducer Logic

const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , rootElement);

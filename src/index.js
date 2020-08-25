import React from 'react';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import App from './components/App';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
   <Router>
     <App />
    </Router>
  </Provider>
  , document.querySelector('#root')
)

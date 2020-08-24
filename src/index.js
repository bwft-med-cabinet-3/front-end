import React from 'react';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import App from './components/App';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)

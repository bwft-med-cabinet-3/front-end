import React from 'react';
import './App.css';
import Login from "./Login";
import Register from "./Register";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <h1>MedCabinet</h1>
      <nav>
        <div className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/login">Login</Link>
         <Link to="/register">Register</Link>
        </div>   
      </nav> 
      </header>
      <Switch>
        <Route path="/login">
      <Login />
      </Route>
      <Route path="/register">
      <Register />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

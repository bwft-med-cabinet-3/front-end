import React from 'react';
import './App.css';
import Login from "./Login";
import Register from "./Register";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">   
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

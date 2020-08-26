import React from "react";
import "./App.css";
import About from "./About";
import Login from "./Login";
import Register from "./Register";

// import Navigation from './Navigation';
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home';
import CreateForm from './CreateForm';
// import FavoriteStrains from "./FavoriteStrains";
import ListDispensaries from "./ListDispensaries";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MedCabinet</h1>
        <nav>
          <div className="nav-links">
            <Link to='/Home'>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/createform">
          <CreateForm />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path='/dispensaries'>
          <ListDispensaries />
      </Route>
      <Route  exact path='/strains/:id'>
        {/* <FavoriteStrains /> */}
      </Route>
      <Route path='/database'>
        {/* <PopularStrainDetails /> */}
      </Route>
      </Switch>
    </div>
  );
}

export default App;

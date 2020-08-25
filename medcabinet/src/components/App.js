import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Navigation from './Navigation';
import Login from './Login';
import Registration from './Register';
import Symptoms from'./Symptoms';
// import RecommendedDispensaries from './components/RecommendedDispensaries';
// import IndividualStrainPage from './components/Strains/IndividualStrainPage';
// import PopularStrainDetails from './components/Strains/PopularStrainDetails';

function App() {
  return (
    <div className="App">
    <h1> Med Cabinent </h1>
      <Route path='/'>
        <Navigation />
      </Route>
      <Route exact path ='/'>
        <Login />
      </Route>
      <Route path='/register'>
        <Registration />
      </Route>
      <Route exact path='/dispensaries'>
        {/* <RecommendedDispensaries /> */}
      </Route>
      <Route  exact path='/strains/:id'>
        {/* <IndividualStrainPage /> */}
      </Route>
      <Route path='/database'>
        {/* <PopularStrainDetails /> */}
      </Route>
     
     
    </div>
  );
}

export default App;
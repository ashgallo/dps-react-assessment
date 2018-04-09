import React, { Component } from 'react';
import NavBar from './NavBar';
import Flash from './Flash';
import Beers from './Beers';
import Home from './Home';
import BeerList from './BeerList';
import BreweryList from './BreweryList';
import Glassware from './Glassware';
import Locations from './Locations';
import NoMatch from './NoMatch';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Beers} /> 
          <Route exact path='/instructions' component={Home} /> 
          <Route exact path='/allbeers' component={BeerList} />
          <Route exact path='/allbreweries' component={BreweryList} />
          <Route exact path='/glassware' component={Glassware} />
          <Route exact path='/locations' component={Locations} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )}
}  
   
export default App;


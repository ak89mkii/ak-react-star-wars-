import React, {Component} from 'react';
import './App.css';
import StarshipList from '../StarshipList/StarshipList'
import {Route} from 'react-router-dom'
import StarshipDetails from '../StarshipDetails/StarshipDetails'

class App extends Component {
  state = {
  }

  render() {
    return (
    <>
      <h1>Star Wars Starships!</h1>
    <Route
    exact path='/'
    render = {() =>
    <StarshipList />}
    />
    <Route 
    exact path='/starship'
    render={( {location} ) => 
      <StarshipDetails
        location={location}
      />
  }/>
  </>
    )
  }
}


export default App;

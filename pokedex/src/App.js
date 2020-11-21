import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import PokemonList from './containers/PokemonList'
import CaughtPokemonList from './containers/CaughtPokemonList'
import PokemonProfile from './containers/PokemonProfile'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={PokemonList} />
        <Route exact path={'/caught'} component={CaughtPokemonList} />
        <Route exact path={'/pokemon/:name'} component={PokemonProfile} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;

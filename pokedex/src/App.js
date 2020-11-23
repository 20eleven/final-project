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
        <Route path={'/pokemon/:id'} component={PokemonProfile} />
        <Route path={'/caught'} component={CaughtPokemonList} />
        <Route path={'/'} exact component={PokemonList} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;

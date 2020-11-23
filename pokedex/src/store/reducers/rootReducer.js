import { combineReducers } from 'redux'
import pokemonListReducer from './pokemonListReducer'
import pokemonMultipleReducer from './getPokemonReducer'

const rootReducer = combineReducers({
   pokeList: pokemonListReducer,
   pokeProfile: pokemonMultipleReducer
})

export default rootReducer
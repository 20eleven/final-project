import { combineReducers } from 'redux'
import pokemonListReducer from './pokemonListReducer'
import pokemonMultipleReducer from './getPokemonReducer'
import inputSearchReducer from './inputSearchReducer'

const rootReducer = combineReducers({
   pokeList: pokemonListReducer,
   pokeProfile: pokemonMultipleReducer,
   pokeSearch: inputSearchReducer
})

export default rootReducer
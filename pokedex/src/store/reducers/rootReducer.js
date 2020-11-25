import { combineReducers } from 'redux'
import pokemonListReducer from './pokemonListReducer'
import pokemonMultipleReducer from './getPokemonReducer'
import inputSearchReducer from './inputSearchReducer'
import catchPokemonReducer from './catchPokemonReducer'

const rootReducer = combineReducers({
   pokeList: pokemonListReducer,
   pokeProfile: pokemonMultipleReducer,
   pokeSearch: inputSearchReducer,
   pokeCatch: catchPokemonReducer
})

export default rootReducer
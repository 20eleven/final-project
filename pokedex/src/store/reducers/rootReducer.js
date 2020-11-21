import { combineReducers } from 'redux'
import pokemonListReducer from './pokemonListReducer'

const rootReducer = combineReducers({
   pokeList: pokemonListReducer
})

export default rootReducer
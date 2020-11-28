import { 
   CAUGHT_POKEMON_SUCCESS, 
   CAUGHT_POKEMON_FAIL
} from '../actions/actionTypes'

const initialState = {
   data: [],
   errorMsg: ''
}

const catchPokemonReducer = (state = initialState, action) => {
   switch (action.type) {
      case CAUGHT_POKEMON_FAIL: 
         return {
            ...state,
            errorMsg: 'Unable to catch pokemon'
         }
      case CAUGHT_POKEMON_SUCCESS:
         const cachedPokemons = [...state.pokemons]
         cachedPokemons.forEach(pokemon => {
            if (pokemon.id === action.id) {
               pokemon.isCaught = "true"
               pokemon.caughtDate = new Date(Date.now()).toLocaleString()
               pokemon.className = "catchDisabled"
            }
         })
         return {
            ...state,
            pokemons: cachedPokemons
         }
      default: 
         return state
   }
}

export default catchPokemonReducer
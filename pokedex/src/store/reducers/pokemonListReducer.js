import { POKEMON_LIST_FAIL, POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS } from "../actions/actionTypes"

const initialState = {
   loading: false,
   data: [],
   errorMsg: ''
}

const pokemonListReducer = (state = initialState, action) => {
   switch(action.type) {
      case POKEMON_LIST_LOADING:  
         return {
            ...state,
            loading: true,
            errorMsg: ''
         }
      case POKEMON_LIST_FAIL: 
         return {
            ...state,
            loading: false,
            errorMsg: 'Unable to get pokemon'
         }
      case POKEMON_LIST_SUCCESS:  
         return {
            ...state,
            loading: false,
            data: action.payload,
            errorMsg: ''
         }
      default: 
         return state
   }
}

export default pokemonListReducer
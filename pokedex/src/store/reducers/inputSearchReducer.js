import { 
   POKEMON_SEARCH_LOADING, 
   POKEMON_SEARCH_SUCCESS, 
   POKEMON_SEARCH_FAIL 
} from "../actions/actionTypes"

const initialState = {
   loading: false,
   data: {},
   errorMsg: ''
}

const inputSearchReducer = (state = initialState, action) => {
   switch(action.type) {
      case POKEMON_SEARCH_LOADING:  
         return {
            ...state,
            loading: true,
            errorMsg: ''
         }
      case POKEMON_SEARCH_FAIL: 
         return {
            ...state,
            loading: false,
            errorMsg: 'Unable to get pokemon'
         }
      case POKEMON_SEARCH_SUCCESS:  
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

export default inputSearchReducer
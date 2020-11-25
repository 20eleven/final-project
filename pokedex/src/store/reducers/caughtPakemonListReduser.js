import { 
   CAUGHT_LIST_LOADING,
   CAUGHT_LIST_SUCCESS,
   CAUGHT_LIST_FAIL
 } from "../actions/actionTypes"

const initialState = {
   loading: false,
   data: [],
   errorMsg: '',
}

const caughtPakemonListReduser = (state = initialState, action) => {
   switch(action.type) {
      case CAUGHT_LIST_LOADING:  
         return {
            ...state,
            loading: true,
            errorMsg: ''
         }
      case CAUGHT_LIST_FAIL: 
         return {
            ...state,
            loading: false,
            errorMsg: 'Unable to get cought pokemons'
         }
      case CAUGHT_LIST_SUCCESS:  
         return {
            ...state,
            loading: false,
            data: action.payload,
            errorMsg: '',
         }
      default: 
         return state
   }
}

export default caughtPakemonListReduser
import axios from 'axios'
import { 
   CAUGHT_LIST_LOADING,
   CAUGHT_LIST_SUCCESS,
   CAUGHT_LIST_FAIL
} from './actionTypes'

export const getCaughtPokemonList = () => {
   return async dispatch => {
      try {
         dispatch({
            type: CAUGHT_LIST_LOADING
         })

         const res = await axios.get(`http://localhost:5000/caught`)          
         dispatch({
            type: CAUGHT_LIST_SUCCESS,
            payload: res.data
         })
      } catch(error) {
         dispatch({
            type: CAUGHT_LIST_FAIL
         })
      }
   }
}
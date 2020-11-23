import axios from "axios"
import { 
   POKEMON_SEARCH_LOADING,
   POKEMON_SEARCH_SUCCESS,
   POKEMON_SEARCH_FAIL
 } from './actionTypes'

export const inputSearch = (name) => {
   return async dispatch => {
      try {
         dispatch({
            type: POKEMON_SEARCH_LOADING
         })
         const res = await axios.get(`http://localhost:5000/pokemons?q=${name}`);
         dispatch({
            type: POKEMON_SEARCH_SUCCESS,
            payload: res.data
         })
      } catch (error) {
         dispatch({
            type: POKEMON_SEARCH_FAIL
         })
      }
   }
}
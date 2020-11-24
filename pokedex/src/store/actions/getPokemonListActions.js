import axios from 'axios'
import { 
   POKEMON_LIST_LOADING,
   POKEMON_LIST_SUCCESS,
   POKEMON_LIST_FAIL
} from './actionTypes'

export const getPokemonList = (page) => {
   return async dispatch => {
      try {
         dispatch({
            type: POKEMON_LIST_LOADING
         })

         const perPage = 15
         const offset = page

         const res = await axios.get(`http://localhost:5000/pokemons?_page=${offset}&_limit=${perPage}`) 
         dispatch({
            type: POKEMON_LIST_SUCCESS,
            payload: res.data
         })
      } catch(error) {
         dispatch({
            type: POKEMON_LIST_FAIL
         })
      }
   }
}
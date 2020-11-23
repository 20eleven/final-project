import axios from 'axios'
import { 
   POKEMON_MULTIPLE_LOADING,
   POKEMON_MULTIPLE_SUCCESS,
   POKEMON_MULTIPLE_FAIL
 } from './actionTypes'

export const getPokemon = (pokemon) => {
   return async dispatch => {
      try {
         dispatch({
            type: POKEMON_MULTIPLE_LOADING
         })

         const res = await axios.get(`http://localhost:5000/pokemons/${pokemon}`) 

         dispatch({
            type: POKEMON_MULTIPLE_SUCCESS,
            payload: res.data,
            pokemonId: pokemon
         })
      } catch(error) {
         dispatch({
            type: POKEMON_MULTIPLE_FAIL
         })
      }
   }
}
import axios from 'axios'

import {
   CAUGHT_POKEMON_SUCCESS,
   CAUGHT_POKEMON_FAIL
} from './actionTypes'

export const catchPokemon = (id, name) => {
   return async dispatch => {
      try {
         await axios.put(`http://localhost:5000/pokemons/${id}`, {
            name,
            isCaught: "true"
         })

         await axios.post(`http://localhost:5000/caught`, {
            isCaught: "true",
            caughtDate: new Date(Date.now()),
            name,
            id
         })
         dispatch({
            type: CAUGHT_POKEMON_SUCCESS,
            id
         })
      } catch(error) {
         dispatch({
            type: CAUGHT_POKEMON_FAIL
         })
      }
   }
}
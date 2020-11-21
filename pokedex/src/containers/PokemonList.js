import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navigation/NavBar/NavBar'
import { getPokemonList } from '../store/actions/pokemonActions'

const PokemonList = () => {
   const dispatch = useDispatch()
   const pokemonList = useSelector(state => state.pokeList)
   useEffect(() => {
      fetchData(1)
   }, [])

   const fetchData = (page = 1) => {
      dispatch(getPokemonList(page))
   }

   const showData = () => {
      if (pokemonList.loading) {
         return <p>loading</p>
      }
      if (pokemonList.data !== []) {
         return pokemonList.data.map(pokeElement => { //TODO: add key
            return (
               <div>
                  <p>{pokeElement.name}</p>
                  <Link to={`/pokemon/${pokeElement.name}`}>Check</Link>
               </div>
            )
         })
      }     
      if (pokemonList.errorMsg !== '') {
         return <p>{pokemonList.errorMsg}</p>
      }
      return <p>Unable to get data</p>
   }

   return (
      <Fragment>
         <NavBar />
         {showData()}
      </Fragment>
   )
}

export default PokemonList
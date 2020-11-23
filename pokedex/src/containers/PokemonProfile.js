import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../store/actions/getPokemonActions'
import NavBar from '../components/Navigation/NavBar/NavBar'
import './PokemonProfile.css'


const PokemonProfile = props => {
   const pokemonId = props.match.params.id
   const dispatch = useDispatch()
   const pokemonState = useSelector(state => state.pokeProfile)
   useEffect(() => {
      dispatch(getPokemon(pokemonId))
   }, [])

   const showData = () => {
      if (pokemonState.data.id !== undefined) {
         return (
            <div className={'pokemonWrapper'}>
               <div className={'item'}>
                  <h1>#{pokemonState.data.id} - {pokemonState.data.name}</h1>
                  <div className={'imgSeparateWrapper'}>
                  <img src={`${process.env.PUBLIC_URL}/pokemons/${pokemonState.data.id}.png`} alt={pokemonState.data.name} />
                  </div>
               </div>
            </div>
         )
      }
      if (pokemonState.loading) {
         return <p>Loading...</p>
      }
      if (pokemonState.errorMsg !== '') {
         return <p>{pokemonState.errorMsg}</p>
      }
      return <p>Error getting pokemon</p>
   }

   return (
      <Fragment>
         <NavBar />
         {showData()}
      </Fragment>
   )
}

export default PokemonProfile
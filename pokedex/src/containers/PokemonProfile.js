import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../store/actions/getPokemonActions'
import NavBar from '../components/Navigation/NavBar/NavBar'
import ErrorMsg from '../components/Ui/ErrorMessage/ErrorMsg'
import Loader from '../components/Ui/Loader/Loader'
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
         const catched = () => {
            if (pokemonState.data.isCaught) {
               return <p>Caught: {pokemonState.data.caughtDate}</p>
            }
         }
         return (
            <div className={'pokemonWrapper'}>
               <div className={'item'}>
                  <h1>#{pokemonState.data.id} - {pokemonState.data.name}</h1>                  
                  <div className={'imgSeparateWrapper'}>
                     <img src={`${process.env.PUBLIC_URL}/pokemons/${pokemonState.data.id}.png`} alt={pokemonState.data.name} />                     
                  </div>
                  {catched()}
               </div>
            </div>
         )
      }
      if (pokemonState.loading) {
         return <Loader />
      }
      if (pokemonState.errorMsg !== '') {
         return <ErrorMsg>{pokemonState.errorMsg}</ErrorMsg>
      }
      return <ErrorMsg>Error getting pokemon</ErrorMsg>
   }

   return (
      <Fragment>
         <NavBar story={props.history} />
         {showData()}
      </Fragment>
   )
}

export default PokemonProfile
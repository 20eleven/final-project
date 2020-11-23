import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navigation/NavBar/NavBar'
import { getPokemonList } from '../store/actions/getPokemonListActions'
import './PokemonList.css'

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
      
      if (pokemonList.data !== []) {
         return (
            <div className={'listWrapper'}>
               {pokemonList.data.map(pokeElement => { //TODO: add key и перенести в отдельный контейнер 
                  return (
                     
                     <div className={'pokemonCard'}>
                        <div className={'imgWrapper'}>
                           <img src={`${process.env.PUBLIC_URL}/pokemons/${pokeElement.id}.png`} alt={`${pokeElement.name}`} />
                        </div>
                       
                        {/* при нажатии на картинку покемон должен быть пойман, то есть при нажатии все затемняется появляетяс бордер и покемон считается пойманым */}
                        {/* <div>Caught</div> */}
                        
                        <Link to={`/pokemon/${pokeElement.id}`}>{pokeElement.name.toUpperCase()}</Link>
                        
                       
                     </div>
                     
                  )
               })}
            </div>
         )
      }    
      
      if (pokemonList.loading) {
         return <p>loading</p> //TODO: открисовать компонент и вытащить его из под меню 
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
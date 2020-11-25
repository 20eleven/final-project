import React, { Fragment, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navigation/NavBar/NavBar'
import { getPokemonList } from '../store/actions/getPokemonListActions'
import ErrorMsg from '../components/Ui/ErrorMessage/ErrorMsg'
import Loader from '../components/Ui/Loader/Loader'
import ReactPaginate from 'react-paginate'
import './PokemonList.css'
import { catchPokemon } from '../store/actions/catchPokemonAction'
import { inputSearch } from '../store/actions/inputSearchActions'

const PokemonList = (props) => { 
   const dispatch = useDispatch()
   const pokemonList = useSelector(state => state.pokeList)
   // console.log(pokemonList.data);

   const searchState = useSelector(state => state.pokeSearch)
   const handleChange = useCallback((event) => {
      dispatch(inputSearch(event.target.value))
   }, [dispatch])
   // console.log(searchState);
   //TODO: допилить передачу данных для рендера покемонов из поиска

   useEffect(() => {
      fetchData(1)
   }, [])
   const fetchData = (page = 1) => {
      dispatch(getPokemonList(page))
   }
   
   const caughtPokemonHandle = useCallback((id, name, caught) => {
      if (!caught) {
         dispatch(catchPokemon(id, name))
      }     
   }, [dispatch])
   
   const showData = () => {     
      if (pokemonList.loading) {
         return <Loader /> 
      }       
      if (pokemonList.data !== []) {
         return (
            <div className={'listWrapper'}>
               {pokemonList.data.map(pokeElement => {
                  return (                  
                     <div className={'pokemonCard'} key={pokeElement.name}>
                        <div className={'imgWrapper'}>
                           <img 
                              src={`${process.env.PUBLIC_URL}/pokemons/${pokeElement.id}.png`} 
                              alt={`${pokeElement.name}`} 
                              onClick={() => caughtPokemonHandle(pokeElement.id, pokeElement.name, pokeElement.isCaught)}
                              className={pokeElement.className}                             
                           />
                        </div>
                       <Link to={`/pokemon/${pokeElement.id}`}>{pokeElement.name.toUpperCase()}</Link>
                     </div>                     
                  )
               })}
            </div>
         )
      }    
      if (pokemonList.errorMsg !== '') {
         return <ErrorMsg>{pokemonList.errorMsg}</ErrorMsg>
      }
      return <ErrorMsg>Unable to get data</ErrorMsg>
   }

   return (
      <Fragment>
         <NavBar story={props.history} searching={handleChange} />
         {showData()}
         {pokemonList.data !== [] && (
            <div className={'paginateWrapper'}>
               <ReactPaginate 
                  pageCount={Math.ceil(pokemonList.count / 15)}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  onPageChange={(data) => fetchData(data.selected + 1)}
                  containerClassName={'pagination'}
               />
            </div>
         )}
      </Fragment>
   )
}

export default PokemonList
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



const PokemonList = (props) => { 
   const dispatch = useDispatch()
   const pokemonList = useSelector(state => state.pokeList)
   // console.log(pokemonList.data);


   useEffect(() => {
      fetchData(1)
   }, [])
   const fetchData = (page = 1) => {
      dispatch(getPokemonList(page))
   }
   
   const caughtPokemonHandle = useCallback((id, name) => {
      dispatch(catchPokemon(id, name)) //TODO: выполнить проверку пойман ли уде покемон
   }, [dispatch])

   

   pokemonList.data.forEach(pokemonImgItem => {
      if(pokemonImgItem.isCaught) {
         console.log('coughted');
         
      }
   })
   //TODO: допилить динамическое добавлени класса определенному элементу
   

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
                              onClick={() => caughtPokemonHandle(pokeElement.id, pokeElement.name)}
                              id={pokeElement.id}
                              // className={'catchDisabled'}                             
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
         <NavBar story={props.history} />
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
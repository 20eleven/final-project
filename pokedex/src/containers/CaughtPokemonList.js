import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../components/Navigation/NavBar/NavBar'
import ErrorMsg from '../components/Ui/ErrorMessage/ErrorMsg'
import Loader from '../components/Ui/Loader/Loader'
import { getCaughtPokemonList } from '../store/actions/getCaughtPokemonListAction'
import './CaughtPokemonList.css'

const CaughtPokemonList = () => {//TODO: сделать карточки покемонов круглыми 
   const dispatch = useDispatch()
   const caughtPokemonList = useSelector(state => state.pokeCaughtList)
   useEffect(() => {
      dispatch(getCaughtPokemonList())
   }, [])

   const showData = () => {
      if (caughtPokemonList.loading) {
         return <Loader />
      }
      if (caughtPokemonList.data !== []) {
         return (
            <div className={'caughtListWrapper'}>
               {caughtPokemonList.data.map(caughtPokeElement => {
                  return (
                     <div className={'caughtPokemonCard'} key={caughtPokeElement.name}>
                        <div className={'caughtImgWrapper'}>
                           <img src={`${process.env.PUBLIC_URL}/pokemons/${caughtPokeElement.id}.png`} alt={`${caughtPokeElement.name}`} />
                        </div>
                        <h1>{caughtPokeElement.name}</h1>
                        <p>{caughtPokeElement.caughtDate}</p> 
                     </div>
                  )
               })}
            </div>
         )
      }
      if (caughtPokemonList.errorMsg !== '') {
         return <ErrorMsg>{caughtPokemonList.errorMsg}</ErrorMsg>
      }
      return <ErrorMsg>Unable to get data</ErrorMsg>
   }



   return (
      <Fragment>
         <NavBar />
         {showData()}
      </Fragment>
   )
}

export default CaughtPokemonList
import React, { Fragment } from 'react'
import NavBar from '../components/Navigation/NavBar/NavBar'

const PokemonProfile = props => {
   const { match } = props
   const { params } = match
   const { name } = params
   return (
      <Fragment>
         <NavBar />
         <div>{`profile of pokemon - ${name}`}</div>
      </Fragment>
   )
}

export default PokemonProfile
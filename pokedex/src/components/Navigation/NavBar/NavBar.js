import React from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../../Ui/Input/Input'
import './NavBar.css'

const NavBar = () => {
   return (
      <nav>
         <Input />
         <NavLink to={'/'}>
            <div className='navItem'>
               Pokedex
            </div>
         </NavLink>
         <NavLink to={'/caught'}>
            <div className='navItem'>
               My collection
            </div>
         </NavLink>
      </nav>
   )
}

export default NavBar
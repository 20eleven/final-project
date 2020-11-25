import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputSearch } from '../../../store/actions/inputSearchActions'
import './Input.css'

const Input = (props) => {
   const [search, setSearch] = useState('')
   const dispatch = useDispatch()
   const searchState = useSelector(state => state.pokeSearch)
   useEffect(() => {
      if (search !== '') {
         dispatch(inputSearch(search.toString())) //FIXME: при передаче search выдает весь список покемонов(тк пустая строка), но при просто строке ('pikachu), выдает нужное 
      }
   }, [])

   const handleChange = (event) => {
      setSearch(event.target.value)
   }
   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         props.story.push(`/pokemon/${searchState.data.id}`)         
      }
   }

   return (
      <div className='inputItem'>
         <input 
            type='text'
            placeholder='Search pokemon...'
            value={search}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
         />
      </div>
   )
}

export default Input
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputSearch } from '../../../store/actions/inputSearchActions'
import './Input.css'

const Input = (props) => {
   // const [search, setSearch] = useState('')
   const dispatch = useDispatch()
   const searchState = useSelector(state => state.pokeSearch)
   useEffect(() => {
      dispatch(inputSearch())
   }, [])

   const handleChange = (event) => {
      inputSearch(event.target.value)
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
            // onChange={event => setSearch(event.targer.value)}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
         />
      </div>
   )
}

export default Input
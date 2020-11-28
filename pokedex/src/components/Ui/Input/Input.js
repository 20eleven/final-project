import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputSearch } from '../../../store/actions/inputSearchActions'
import './Input.css'

const Input = (props) => {
   // const handleKeyPress = (event) => {
   //    if (event.key === 'Enter') {
   //       props.story.push(`/pokemon/${searchState.data.id}`)         
   //    }
   // }

   return (
      <div className='inputItem'>
         <input 
            type='text'
            placeholder='Search pokemon...'
            // onKeyPress={handleKeyPress}
            onChange={props.serchingPoke}
         />
      </div>
   )
}

export default Input
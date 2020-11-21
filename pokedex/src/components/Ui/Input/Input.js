import React from 'react'
import './Input.css'

const Input = props => {
   return (
      <div className='inputItem'>
         <input 
            type='text'
            placeholder='Search pokemon'
         />
      </div>
   )
}

export default Input
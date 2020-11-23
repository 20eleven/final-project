import React from 'react'
import './ErrorMsg.css'

const ErrorMsg = (props) => {
   return <div className="dangerMsg"><p>{props.children}</p></div>
}

export default ErrorMsg
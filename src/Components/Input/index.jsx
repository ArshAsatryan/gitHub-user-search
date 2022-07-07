import React from 'react'
import './index.scss'

const Input = (props) => {
  return (
    <input type='text' 
           value={props.value}     
           placeholder={props.placeholder}
           onChange={props.onChange}
     />
  )
}

export default Input
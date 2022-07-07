import{ React, useState} from 'react';
import './index.scss'
import {FaSearch} from "react-icons/fa";

import Input from '../Input/index'
import Button from '../Button/index'

const Search = ({onUser}) => {

  const [inputVal, setInputVal] = useState('')
    
  const onSubmit = (e) => {
      e.preventDefault()
      if (inputVal.trim()) {
        setInputVal('')
        onUser(inputVal)
      }
    }  

    const onChange = (e) => {
      setInputVal(e.target.value)
    } 
  return (
    <form className='search__form' onSubmit={onSubmit}>
        <label className='search__icon' htmlFor='search--input'>
            <FaSearch />
        </label>
        <div className='search__input'>
            <Input value={inputVal} 
                   placeholder='Search GitHub username...' 
                   name='search--input' 
                   onChange={onChange}
            />
        </div>
        <div className='search__btn'>
            <Button name='Search' />
        </div>
    </form>
  )
}

export default Search
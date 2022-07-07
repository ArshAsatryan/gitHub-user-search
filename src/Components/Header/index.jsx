import {React} from 'react'
// import Button from '../Button'
import './index.scss'
import {BsFillSunFill, BsMoonFill} from "react-icons/bs"

export const Header = ({onClick, theme}) => {
  
  return (
    <div className='header'>
          <h1>devfinder</h1>
          <div onClick={onClick}>
              <span>{theme === 'dark' ? "LIGTH" : "DARK"}</span>
              {theme === 'dark' ? <BsFillSunFill id='theme'/> : <BsMoonFill id='theme'/>}
          </div>
    </div>
  )
}

export default Header;
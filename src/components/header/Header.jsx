import React from 'react'
import './Header.css'
import Icons from '../images/Icons.png'
import Logo from '../images/logo.png'

function Header() {
  return (
    <>
    <div className='header-main'>
        <div className='header-logo'>
            <img src={Logo} alt="" />
        </div>
        <div className='menu-links'>
            <a className='links' href="">Man</a>
            <a className='links' href="">Woman</a>
            <a className='links' href="">Jersey</a>
            <a className='links' href="">Teams</a>
            <a className='links' href="">App</a>
        </div>
        <div className='icons-main'>
            <img src={Icons} alt="" />
        </div>

    </div>
    </>
  )
}

export default Header
import React from 'react'
import Navigation from './Navigation'
import logo from '..//assets/images/logo.png'
import phone_icon from '..//assets/images/phone_icon.png'
import '..//assets/css/Header.scss'
import '../assets/css/fonts.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <div className='header_container'>
        <div className='header_logo'>
          <img src={logo} alt="" />
          <div>
            <p className='header_logo_name'>СПЕЦПРОММАШ</p>
            <p className='header_logo_name2'>машинобудівні послуги</p>
          </div>
        </div>
        <div className='header_contacts'>
          <img className='header_phone_icon' src={phone_icon} alt="" />
          <div>
            <p>Зв'язок з нашими Менеджерами</p>
            <p>+380 (96) 564-14-39</p>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  )
}

export default Header
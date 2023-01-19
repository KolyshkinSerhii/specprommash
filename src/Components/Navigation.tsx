import React from 'react'
import { NavLink } from 'react-router-dom'
import '..//assets/css/Navigation.scss'
import QuoteButton from './Common/QuoteButton'
import '..//assets/css/fonts.scss'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className='navigation'>
      <div className='navigation_pages'>
        <div>
          <NavLink to='/' className={'nav'}>ГОЛОВНА</NavLink>
        </div>
        <div>
          <NavLink to='/aboutUs' className={'nav'}>ПРО НАС</NavLink>
        </div>
        <div>
          <NavLink to='/services' className={'nav'}>ВИРОБНИЦТВО</NavLink>
        </div>
        <div>
          <NavLink to='/shop' className={'nav'}>МАГАЗИН</NavLink>
        </div>
        <div>
          <NavLink to='/contacts' className={'nav'}>КОНТАКТИ</NavLink>
        </div>
      </div>
      <div className='navigation_button'>
        <QuoteButton/>
      </div>
    </div>
  )
}

export default Navigation
import React from 'react'
import "./MenuItem.css"

export const MenuItem = ({Logo, title}) => {
  return (
    <div className='header__menuItem'>
        <Logo className='header__menuItemLogo'/>
        <div className='header__menuItemTitle'>{title}</div>
    </div>
  )
}

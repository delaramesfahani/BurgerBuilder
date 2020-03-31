import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/navigationItems'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/backdrop'
import './SlideDrawer.css'

const SlideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show />
      <div className='SlideDrawer'>
        <Logo height='11%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SlideDrawer

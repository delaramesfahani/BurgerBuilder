import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/navigationItems'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/backdrop'
import './SlideDrawer.css'

const SlideDrawer = (props) => {
  console.log('props', props)
  let DrawerClassName = 'SlideDrawer Open'
  if (props.open) {
  } else {
    DrawerClassName = 'SlideDrawer Close'
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={DrawerClassName}>
        <Logo height='11%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SlideDrawer

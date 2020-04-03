import React from 'react'
import Logo from '../../Logo/Logo'
import './toolbar.css'
import NavigationItems from '../NavigationItems/navigationItems'
import DrawerToggle from '../SlideDrawer/DrawerToggle'

const toolbar = (props) => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggle} />
    <Logo height='80%' />
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar

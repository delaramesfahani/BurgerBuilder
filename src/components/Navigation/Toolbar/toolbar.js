import React from 'react'
import Logo from '../../Logo/Logo'
import './toolbar.css'
import NavigationItems from '../NavigationItems/navigationItems'

const toolbar = (props) => (
  <header className='Toolbar'>
    <Logo height='80%' />
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar

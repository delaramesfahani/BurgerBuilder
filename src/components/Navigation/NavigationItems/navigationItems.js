import React from 'react'
import './navigationItems.css'
import NavigationItem from './navItem'

const navigationItems = () => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
)

export default navigationItems

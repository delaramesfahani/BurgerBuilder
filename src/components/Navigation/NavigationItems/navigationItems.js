import React from 'react'
import './navigationItems.css'
import NavigationItem from './navItem'

const navigationItems = () => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' exact>Burger Builder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
  </ul>
)

export default navigationItems

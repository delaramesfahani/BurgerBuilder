import React from 'react'
import './Logo.css'
const BurgerLogo = require('../../assets/burger-logo.png')

const Logo = (props) => (
  <div className='Logo' style={{ height: props.height }}>
    <img src={BurgerLogo} alt='My Burger' />
  </div>
)

export default Logo

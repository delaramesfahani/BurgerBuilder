import React from 'react'
import './navItem.css'
import { NavLink } from 'react-router-dom'

const navigationItem = (props) => (
  <li className='navigationItem'>
    <NavLink
      exact={props.exact}
      to={props.link}
      activeClassName='active'
    >{props.children}
    </NavLink>
  </li>
)

export default navigationItem

import React from 'react'
import './navItem.css'

const navigationItem = (props) => (
  <li className='navigationItem'>
    <a href={props.Link} className={props.active ? 'navigationItem active' : null}>
      {props.children}
    </a>
  </li>
)

export default navigationItem

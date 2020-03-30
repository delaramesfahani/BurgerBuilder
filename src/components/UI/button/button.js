import React from 'react'
import './button.css'

const Button = (props) => (
  <button
    onClick={props.clicked}
    className='Button'
  >
    {props.children}
  </button>
)

export default Button

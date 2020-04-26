import React from 'react'
import Burger from '../../burger/burger'
import './checkoutSummary.css'

const checkoutSummary = (props) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>your Order here :</h1>
    <Burger ingredients={props.ingredients} />
    <div className='Btn'>
      <button className='Cancel' onClick={props.checkoutCancel}>Cancel</button>
      <button className='Payment' onClick={props.checkoutContinue}>Continue</button>
    </div>
  </div>
)
export default checkoutSummary

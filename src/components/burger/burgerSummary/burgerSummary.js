import React from 'react'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igkey => {
    return (
      <li key={igkey}>
        <span>{igkey}</span> : {props.ingredients[igkey]}
      </li>
    )
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>continue to checkout?</p>
    </Aux>
  )
}

export default orderSummary

import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/button/button'
import '../../UI/button/button.css'

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
      <p><strong>Total price : {props.price.toFixed(2)} $</strong></p>
      <p>continue to checkout?</p>
      <Button className='Danger'>CANCEL</Button>
      <Button className='Success'>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary

import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/button/button'
import '../../UI/button/button.css'

class OrderSummary extends React.Component {
  render () {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(igkey => {
      return (
        <li key={igkey}>
          <span>{igkey}</span> : {this.props.ingredients[igkey]}
        </li>
      )
    })
    return (
      <Aux>
        <h3>Your Order</h3>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total price : {this.props.price.toFixed(2)} $</strong></p>
        <p>continue to checkout?</p>
        <Button className='Danger'>CANCEL</Button>
        <Button className='Success'>CONTINUE</Button>
      </Aux>
    )
  }
}
export default OrderSummary

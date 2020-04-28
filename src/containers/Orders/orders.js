import React from 'react'
import Order from '../../components/Order/Orders/orders'
import { withRouter } from 'react-router-dom'

class Orders extends React.Component {
  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}
export default Orders

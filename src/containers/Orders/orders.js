import React from 'react'
import Order from '../../components/Order/Orders/orders'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandle/withErrorHandler'

class Orders extends React.Component {
  state = {
    loading: true,
    orders: []
  }

  componentDidMount() {
    axios.get('/orders.json')
    .then( res => {
      const fetchData = []
      for( let key in res.data ) {
        fetchData.push({ ...res.data[key], id: key })
      }
      this.setState({ loading: false, orders: fetchData })
      console.log('orders::',fetchData)
    })
    .catch( err => this.setState({ loading: false }))
  }

  render () {
    return (
      <div>
        { this.state.orders.map(order =>
           (<Order 
             key={ order.id }
             ingredients={ order.ingredients }
             customer={ order.customer.name}
           />)) }
      </div>
    )
  }
}
export default withErrorHandler(Orders, axios)

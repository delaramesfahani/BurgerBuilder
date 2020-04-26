import React from 'react'
import TextField from '@material-ui/core/TextField'
import './contactOrder.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/spinner'

class ContactOrder extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      address: '',
      postalCard: '',
      loading: false
    }
  }

  orderHandler (event) {
    event.preventDefault() // prevent from loading page
    console.log('ingredientsss??', this.props.ingredients)
    this.setState({ loading: true })
    const orders = {
      ingredients: this.props.ingredients,
      customer: {
        name: 'delaram22',
        address: 'street one',
        country: 'Iran'
      },
      email: 'test@gmail.com'
    }

    axios.post('/orders.json', orders)
      .then(response => this.setState({ loading: false }))
      .catch(error => this.setState({ loading: false }))
  }

  render () {
    let form = (
      <form className='ContactContainer'>
        <TextField label='Name' variant='outlined' />
        <TextField label='Email' variant='outlined' />
        <TextField label='Address' variant='outlined' />
        <TextField id='outlined-basic' label='Postal Card' variant='outlined' />
        <button className='OrderBtn' onClick={(event) => this.orderHandler(event)}>Order</button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div>
        {form}
      </div>

    )
  }
}
export default ContactOrder

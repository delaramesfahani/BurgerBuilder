import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/burger'
import BurgerControls from '../../components/burger/buildControls/controls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/burger/burgerSummary/burgerSummary'
import Spinner from '../../components/UI/Spinner/spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandle/withErrorHandler'

//I wrote it capital and out of class becaus it's Global 
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.6,
  meat: 1.3
}

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,       //for showing modal
      loading: false,
      error: false
    }
  }

  componentDidMount () {
    axios.get('https://react-burger-builder-7468b.firebaseio.com/ingredients.json')
    .then( response => {
      this.setState({
        ingredients : response.data
      })
    })
    .catch( error => {
      this.setState({
        error : true
      })
      console.log('error' , error)
    })
  }

  updatePurchaseHandler = (ingredients) => {
    
    const sum = Object.keys(ingredients).map(igkey => {
      return ingredients[igkey]
    })
    .reduce((sum, el) => {return sum + el},0)
    this.setState({
      purchasable: sum > 0
    })
  }


  addGredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      totalPrice : newPrice,
      ingredients : updatedIngredients
    })
    this.updatePurchaseHandler(updatedIngredients)
  }

  removeGredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if( oldCount <= 0 ) { return }
    const updatedCount = oldCount - 1 
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({
      totalPrice : newPrice,
      ingredients : updatedIngredients
    })
    this.updatePurchaseHandler(updatedIngredients)
  }

  purchasingHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchasingCloseModalHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchasContinueHandler = () => {
    // this.setState({ loading: true})
    // const orders = {
    //   ingredients : this.state.ingredients,
    //   price : this.state.totalPrice,
    //   customer : {
    //     name : 'delaram',
    //     address : 'street one',
    //     country : 'Iran'
    //   },
    //   email : 'test@gmail.com'
    // }

    // axios.post('/orders.json',orders) 
    //   .then(response => this.setState({ loading: false , purchasing: false}))
    //   .catch(error => this.setState({ loading: false , purchasing: false}))

    this.props.history.push('/checkout')
  }

  render () {
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <=0
    }

    let orderSummary = null

    let burger = this.state.error ? <p>Sorry Ingredients can not load for now!</p> : <Spinner />
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls 
            ingredientsAdded = {this.addGredientsHandler}
            ingredientsRemoved = {this.removeGredientsHandler}
            disabled = {disableInfo}
            price = {this.state.totalPrice}
            purchasable = {this.state.purchasable}
            ordered = {this.purchasingHandler}
          />
        </Aux>
      );
      orderSummary = <OrderSummary 
      ingredients={this.state.ingredients} 
      price={this.state.totalPrice} 
      continue={this.purchasContinueHandler}
    />
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosing={this.purchasingCloseModalHandler}>
          {orderSummary}
        </Modal>
       {burger}
      </Aux>
    )
  }
}
export default withErrorHandler(BurgerBuilder, axios)
 
import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/burger'
import BurgerControls from '../../components/burger/buildControls/controls'

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
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
      },
      totalPrice: 4,
      purchasable: false
    }
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

  render () {
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <=0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
          ingredientsAdded = {this.addGredientsHandler}
          ingredientsRemoved = {this.removeGredientsHandler}
          disabled = {disableInfo}
          price = {this.state.totalPrice}
          purchasable = {this.state.purchasable}
        />
      </Aux>
    )
  }
}
export default BurgerBuilder

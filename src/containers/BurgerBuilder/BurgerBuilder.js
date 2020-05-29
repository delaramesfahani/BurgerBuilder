import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/burger'
import BurgerControls from '../../components/burger/buildControls/controls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/burger/burgerSummary/burgerSummary'
import Spinner from '../../components/UI/Spinner/spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandle/withErrorHandler'
import { connect } from 'react-redux' 
import * as actionTypes from '../../store/action'

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
      totalPrice: 4,
      purchasable: false,
      purchasing: false,       //for showing modal
      loading: false,
      error: false
    }
  }

  componentDidMount () {
    console.log('propsss',this.props)
    // axios.get('https://react-burger-builder-7468b.firebaseio.com/ingredients.json')
    // .then( response => {
    //   this.setState({
    //     ingredients : response.data
    //   })
    // })
    // .catch( error => {
    //   this.setState({
    //     error : true
    //   })
    //   console.log('error' , error)
    // })
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
    const oldCount = this.props.ings[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.props.ings
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
    const oldCount = this.props.ings[type]
    if( oldCount <= 0 ) { return }
    const updatedCount = oldCount - 1 
    const updatedIngredients = {
      ...this.props.ings
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
    const queryParam = []
    for ( let i in this.props.ings) {
      queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
    }
    const queryString = queryParam.join('&')


    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  render () {
    const disableInfo = {
      ...this.props.ings
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <=0
    }

    let orderSummary = null

    let burger = this.state.error ? <p>Sorry Ingredients can not load for now!</p> : <Spinner />
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BurgerControls 
            ingredientsAdded = {this.props.onAddIngredient}
            ingredientsRemoved = {this.props.onRemoveIngredien}
            disabled = {disableInfo}
            price = {this.state.totalPrice}
            purchasable = {this.state.purchasable}
            ordered = {this.purchasingHandler}
          />
        </Aux>
      );
      orderSummary = <OrderSummary 
      ingredients={this.props.ings} 
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientsName: ingName }), 
    onRemoveIngredien: (ingName) => dispatch({ type:actionTypes.REMOVE_INGREDIENT, ingredientsName: ingName })
  } 
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(BurgerBuilder, axios))
 
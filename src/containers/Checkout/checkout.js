import React from 'react'
import CheckoutSummary from '../../components/Order/checkoutSummary/checkoutSummary'

class Checkout extends React.Component{
    state = {
        ingredients : {
            salad : 1,
            bacon : 1,
            meat : 1,
            cheese : 1
        }
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/order-data')
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                  ingredients={this.state.ingredients}
                  checkoutContinue={this.checkoutContinueHandler}
                  checkoutCancel={this.checkoutCancelHandler} />
            </div>
        )
    }
}

export default Checkout
import React from 'react'
import Aux from '../Aux'
import Modal from '../../components/UI/Modal/modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
        error : null
    }
    componentWillMount() {
        axios.interceptors.request.use(
            null, req => {
                this.setState({error: null})
                return req
            } )

        axios.interceptors.response.use(res => res, error => {
            this.setState({error: error})
        } )
    }

    clickConfirmedHandler = () => {
        this.setState( {error: null} )
    }

    render () {
      return (
        <Aux>
          <Modal 
            show={this.state.error}
            clicked={this.clickConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler

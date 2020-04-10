import React from 'react'
import './modal.css'
import Aux from '../../../hoc/Aux'
import Backdorp from '../Backdrop/backdrop'

class Modal extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    // this function should return just boolean

    return nextProps.show !== this.props.show || nextProps.children !== this.props.children

    // nextProps.children is for Modal update for Spinner loading
  }

  componentWillUpdate () {
    console.log('WillUpdate:::')
  }

  render () {
    return (
      <Aux>
        <Backdorp show={this.props.show} clicked={this.props.modalClosing} />
        <div
          className='Modal'
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}
export default Modal

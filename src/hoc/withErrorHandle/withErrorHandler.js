import React from 'react'
import Aux from '../Aux'
import Modal from '../../components/UI/Modal/modal'

cost withErrorHandler = (WrappedComponent) => {
    return(props) => {
        return (
            <Aux>
                <Modal>something is wrong</Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }
}

export default withErrorHandler
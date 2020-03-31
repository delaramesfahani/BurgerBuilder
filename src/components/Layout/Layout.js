import React from 'react'
import Aux from '../../hoc/Aux'
import './style.css'
import Toolbar from '../Navigation/Toolbar/toolbar'
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer'

class layout extends React.Component {
  render () {
    return (
      <Aux>
        <Toolbar />
        <SlideDrawer />
        <main className='Content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
export default layout

import React from 'react'
import Aux from '../../hoc/Aux'
import './style.css'
import Toolbar from '../Navigation/Toolbar/toolbar'
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer'

class Layout extends React.Component {
  state = {
    showSlideDrawer : false
  }
  slideDrawerCloseHandler = () => {
    this.setState({
      showSlideDrawer :false
    })
  }

  SlideDrawerToggleHandler = () => {
    this.setState( (prevState) => {
      return {showSlideDrawer : !prevState.showSlideDrawer}
    })
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggle={this.SlideDrawerToggleHandler} />
        <SlideDrawer 
        closed={ this.slideDrawerCloseHandler} 
        open={this.state.showSlideDrawer} />
        <main className='Content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
export default Layout

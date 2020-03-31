import React from 'react'
import Aux from '../../hoc/Aux'
import './style.css'
import Toolbar from '../Navigation/Toolbar/toolbar'
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer'

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SlideDrawer />
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
)

export default layout

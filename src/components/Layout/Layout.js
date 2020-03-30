import React from 'react'
import Aux from '../../hoc/Aux'
import './style.css'
import Toolbar from '../Navigation/Toolbar/toolbar'

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
)

export default layout

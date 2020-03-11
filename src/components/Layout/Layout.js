import React from 'react'
import Aux from '../../hoc/Aux'
import '../Layout/style.css'


const layout = (props) => (
  <Aux>
    <div className = 'content'>Toolbar, Sidebar</div>
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout

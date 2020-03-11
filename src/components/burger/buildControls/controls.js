import React from 'react'
import './controls.css'
import Burgercontrol from './control'

const Controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }

]
const BurgerControls = (props) =>
  (
    <div className='BuildControls'>
      {
        Controls.map(Ctrl =>
          (<Burgercontrol
            key={Ctrl.label}
            label={Ctrl.label}
            added={() => props.ingredientsAdded(Ctrl.type)}
            removed={() => props.ingredientsRemoved(Ctrl.type)}
            disabled={props.disabled[Ctrl.type]}
          />
          ))
      }
    </div>
  )

export default BurgerControls

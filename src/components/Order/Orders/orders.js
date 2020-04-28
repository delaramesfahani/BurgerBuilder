import React from 'react'
import './orders.css'

const order = (props) => {
  const ingredients = []
  for (const ingKey in props.ingredients) {
    ingredients.push({
      name: ingKey,
      amount: props.ingredients[ingKey]
    })
  }
  console.log('haaaaa', ingredients)
  const ingOutput = ingredients.map(ig => {
    return (
      <div>
        <span>{ig.name}: {ig.amount}</span>
      </div>
    )
  })

  return (
    <div className='ordercontainer'>
      <p>{props.customer}</p>
      <p><strong>ingredients:</strong> {ingOutput}</p>
    </div>
  )
}
export default order

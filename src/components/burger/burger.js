import React from 'react'
import BurgerIngredient from '../../components/burger/burgerIngrediants'
import './burger.css'

const Burger = (props) => {
  let ingr = Object.keys(props.ingredients).map(igkey => {
    return [...Array(props.ingredients[igkey])].map((_, index) => {
      return <BurgerIngredient key={igkey + index} type={igkey} />
    })
  })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  console.log('array', ingr)
  if (ingr.length === 0) {
    ingr = <p>please start to add some ingredients!</p>
  }
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {ingr}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}
export default Burger

/*The CartWidget component is the cart icon in the navbar placed at the top-right*/

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
  const {totalItems} = useContext(CartContext)
  return (
    <>
      <span className="material-symbols-outlined" id='navbar__cartWidget'>shopping_cart</span>
      <span className="navbar__cartWidget__counter">{totalItems()}</span>
    </>
  )
}

export default CartWidget
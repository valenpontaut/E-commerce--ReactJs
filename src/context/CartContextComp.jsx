import { CartContext } from "./CartContext"
import { useState} from "react"

const CartContextComp = ({children}) => {
  const [cart,setCart] = useState([]);

  const addItem = (item, amount) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex(x => x.id === item.id);
      cart[pos].amount += amount;
      setCart([...cart]);
    } else{
      setCart([...cart,{...item,amount:amount}]);
    }
  }
  
  const totalItems = () => {
    return cart.reduce((total,item) => total += item.amount, 0)
  }

  const totalPrice = () => {
    return cart.reduce((total,item) => total += (item.amount * item.price),0)
  }

  const remove = (id) => {
    setCart(cart.filter(x => x.id != id))
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.some(x => x.id === id)
  }
  return (
    <CartContext.Provider value={{totalItems, addItem, clear, remove, cart, totalPrice}}>
        {children}
    </CartContext.Provider> 
  )
}

export default CartContextComp;
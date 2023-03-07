//The Cart component is where all the products added to cart live

import { Image, Text, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { NavLink, Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const {cart, clear, totalItems, totalPrice, remove} = useContext(CartContext)
  return (
    <>
    {(totalItems() === 0) ? 
      <div className='body__Container'>
        <div className='cart__emptyCart'>
          <Image className='cart__emptyCart__img' src='/src/img/empty-cart.png'></Image>
          <Text className='item__oopsText'>Looks like you haven't added any products yet. Let's go buy something!</Text>
          <Link to={`/`}><Button mt={'5'} bg='#66999B' _hover={{ bg: '#496A81' }}>Shop Now</Button></Link>
        </div>
      </div>
    :
      <div className='body__Container'>
        <div className='cart__divCartItem'>
          {cart?.map((item)=>(
            <CartItem 
              item={item}
              key={item.id}
              id={item.id}
              name={item.name}
              artist={item.artist}
              description={item.description}
              price={item.price}
              stock={item.stock}
              category={item.category}
              img={item.img}
              amount={item.amount}
              remove={remove}
            />
          ))}
          <div className='cart__divCartItem__text'>
            <div className='cart__divCartItem__text__total'>
              <Text>Total: ${totalPrice()}</Text>
            </div>
          </div>  
        </div>
        <div className='cart__btn'>
          <button onClick={() => clear()} className='cart__btn__clear'>Clear cart</button>
          <NavLink to={`/finishPurchase`}>
            <button className='cart__btn__continuePurchase' >
              Continue my purchase
            </button>
          </NavLink>
        </div>
      </div>}
    </>
  )
}

export default Cart

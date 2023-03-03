/*The Cart component is where all the products added to cart live*/

import { Container, Box, Center, Image, Text, AbsoluteCenter, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import CartItem from './CartItem'

const Cart = () => {
  const {cart, clear, totalItems, totalPrice, remove} = useContext(CartContext)
  if (totalItems() === 0){
    return (
      <Container className='body__Container'>
      <Center><Image src='/src/img/oops.jpg'></Image></Center>
      <Center><Text className='item__oopsText'>Looks like you haven't added any products yet</Text></Center>
      </Container>
    )
  } else {
    return (
      <div className='body__Container'>
        <div>
          {cart.map((item)=>(
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
        </div>
        <div>
          <Text>Total: ${totalPrice()}</Text>
          <Button onClick={() => clear()}>Clear cart</Button>
        </div>
      </div>
    )
  }
}

export default Cart

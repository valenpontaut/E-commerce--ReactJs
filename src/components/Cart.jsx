/*The Cart component is where all the products added to cart live*/

import { Container, Box, Center, Image, Text, AbsoluteCenter, Button } from '@chakra-ui/react'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Loading from './Loading';
import FinishPurchase from './FinishPurchase';

const Cart = () => {
  const {cart, clear, totalItems, totalPrice, remove} = useContext(CartContext)
  const [loading, setLoading] = useState(true);
  const finishPurchase = () => {
    return (<>{loading?<Loading setLoading={setLoading}/>:<FinishPurchase/>}</>)
  }
  if (totalItems() === 0){
    return (
      <Container className='body__Container'>
      <Center><Image src='/src/img/empty-cart.png'></Image></Center>
      <Center><Text className='item__oopsText'>Looks like you haven't added any products yet. Let's go buy something!</Text></Center>
      <Center><Link to={`/`}><Button mt={'5'} bg='#66999B' _hover={{ bg: '#496A81' }}>Shop Now</Button></Link></Center>
      </Container>
    )
  } else {
    return (
      <div className='body__Container'>
        <div>
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
        </div>
        <div>
          <Text>Total: ${totalPrice()}</Text>
          <Button onClick={() => clear()}>Clear cart</Button>
          <Button onClick={() => finishPurchase()}>Finish my purchase</Button>
        </div>
      </div>
    )
  }
}

export default Cart

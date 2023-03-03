/*The ItemCount component is a button included in the Item and ItemDetail component. It doesn't show negative values or a number superior to the available stock*/

import { Button, Flex, Center, Text, Container,useToast, Stack, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { NavLink, Link} from "react-router-dom"

const ItemCount = ({w, stock, onAdd}) => {
  const [counter,setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const toast = useToast()
  const idError = 'idError'
  const showError = (message) => {
    if (!toast.isActive(idError)) {
      toast({
        idError,
        title: message,
        position: 'bottom',
        status: 'error',
        isClosable: true,
        duration: 2000
      })
    }
  }
  const idSuccess = 'idSuccess'
  const showSuccess = (message) => {
    if (!toast.isActive(idSuccess)) {
      toast({
        idSuccess,
        title: message,
        position: 'bottom',
        status: 'success',
        isClosable: true,
        duration: 2000
      })
    }
  }
  const add = () => {
    if (counter < itemStock) {
      setCounter(counter+1);
    } else {
      showError(`There's no more available stock`)
    }
  }
  const substract = () => {
    if (counter > 1) {
      setCounter(counter-1);
    }
  }
  const addToCart = (amount) => {
    if (itemStock === 0) {
      showError(`There's no more available stock`);
    } else {
      setItemStock(itemStock-amount);
      setCounter(1);
      showSuccess(`Product succesfully added to cart`);
      onAdd(amount);
    }
  }
  return (
    <>
    <Box className='itemCount__boxBtns' pt={'1.5rem'}>
      <Box className='itemCount__boxCounterAndAddCart'>
        <Stack bg='#2B3A67' color='white' rounded={'6'} w={w}>
          <Center>
            <Flex >
              <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' onClick={() => substract()}>-</Button>
              <Text py={'2'}>{counter}</Text>
              <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' onClick={() => add()}>+</Button>
            </Flex>
          </Center>
        </Stack>
        <Button
          _hover={{ bg: '#2B3A67' }}
          bg='#2B3A67'
          color='white'
          w={'15rem'}
          onClick={() => addToCart(counter)}>
          <Text pr={2}>Add to cart</Text>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
      </Box>
      <Box pt={'1.5rem'}>
        <Link to={'/cart'}>
          <Button _hover={{ bg: '#496A81' }}
              bg='#66999B'
              color='white'
              w={'35rem'}
              >
              Finish my purchase
            </Button>
        </Link>
      </Box>
    </Box>
      
      

    </>
  )
} 


export default ItemCount
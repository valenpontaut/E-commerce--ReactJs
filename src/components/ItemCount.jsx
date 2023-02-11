/*The ItemCount component is a button included in the Item and ItemDetail component. It doesn't show negative values or a number superior to the available stock*/

import React from 'react'
import { useState } from 'react';
import { 
  Button, 
  Flex, 
  Center, 
  Text, 
  useToast, 
  Container 
} from '@chakra-ui/react';

const ItemCount = ({w, stock}) => {
  const [amount, setAmount] = useState(0);
  const add = () => {
    setAmount(amount+1);
  }
  const substract = () => {
    setAmount(amount-1);
  }
  const toast = useToast()
    const id = 'stockId'
    const showError = (message) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          title: message,
          position: 'bottom',
          status: 'error',
          isClosable: true,
          duration: 2000
        })
      }
    }
    
  if (amount === 0) {
    return (
      <>
      <Container bg='#2B3A67' color='white' rounded={'6'} w={w}>
        <Center>
          <Flex >
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white'>-</Button>
            <Text py={'2'}>{amount}</Text>  
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' onClick={add}>+</Button>
          </Flex>
        </Center>
      </Container>
      </>
    )
  } else if (amount === stock) {
    return (
      <>
      <Container bg='#2B3A67' color='white' rounded={'6'} w={w}>
        <Center>
          <Flex>
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' onClick={substract}>-</Button>
            <Text py={'2'}>{amount}</Text>  
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white'  onClick={() => showError(`There's no more available stock`)}>+</Button>
          </Flex>
        </Center>
      </Container>
      </>
    )
  } else {
    return (
      <>
      <Container bg='#2B3A67' color='white' rounded={'6'} w={w}>
        <Center>
          <Flex >
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' onClick={substract}>-</Button>
            <Text py={'2'}>{amount}</Text>  
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' onClick={add}>+</Button>
          </Flex>
        </Center>
      </Container>  
      </>
    )
  }
}

export default ItemCount
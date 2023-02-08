import React from 'react'
import { useState } from 'react';
import { Button, Flex, Center, Text } from '@chakra-ui/react';

const ItemCount = ({stock}) => {
  const [amount, setAmount] = useState(0);
  const add = () => {
    setAmount(amount+1);
  }
  const substract = () => {
    setAmount(amount-1);
  }
  if (amount >= 0) {
    return (
      <>
      <button onClick={substract}>-</button>
      <Text>{amount}</Text>  
      <button onClick={add}>+</button>
      </>
      
    )
  } else {
    return (
      <>
      </>
    )
  }
          
  return (
    <>
      <Flex>
        <Center>
         
        </Center>
       
      </Flex>
         
    </>
    
  )
}

export default ItemCount
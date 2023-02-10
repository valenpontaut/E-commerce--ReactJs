import React from 'react'
import { useState } from 'react';
import { Button, Flex, Center, Text } from '@chakra-ui/react';

const ItemCount = ({stock}) => {
  const [amount, setAmount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  
  const [first,setFirst] = useState();

  const add = () => {
    setAmount(amount+1);
  }
  const substract = () => {
    setAmount(amount-1);
  }
  
  const disable = () => {
    setDisabled(true);
  }
  const enable = () => {
    setDisabled(false);
  }

  if (amount <= 0) {
    return (
      <>
        <Flex>
          <Center>
            <button onClick={substract} disabled={true}>-</button>
            <Text>{amount}</Text>  
            <button onClick={add}>+</button>
          </Center>
        </Flex>
      </>
    )
  } else if (amount === stock) {
    return (
      <>
        <Flex>
            <Center>
              <button onClick={substract}>-</button>
              <Text>{amount}</Text>  
              <button onClick={add} disabled={true}>+</button>
            </Center>
        </Flex>
        <Text>
          There's no more available stock
        </Text>
      </>
    )
  } else {
    return (
      <>
        <Flex>
          <Center>
            <button onClick={substract}>-</button>
            <Text>{amount}</Text>  
            <button onClick={add}>+</button>
          </Center>
        </Flex>
      </>
    )
  }
}

export default ItemCount
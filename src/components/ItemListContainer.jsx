import { Container } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  
  return (
    <>
    <div>{greeting}</div>
    <Container bg='#0D1821' color='white'>
      Color 1
    </Container>
    <Container bg='#2B3A67' color='white'>
      Color 2
    </Container>
    <Container bg='#496A81' color='white'>
      Color 3
    </Container>
    <Container bg='#66999B' color='white'>
      Color 4
    </Container>
    <Container bg='#B3AF8F' color='white'>
      Color 5
    </Container>
    </>
  )
}

export default ItemListContainer
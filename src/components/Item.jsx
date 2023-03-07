//The Item component is a card of every individual product. The ItemList component contains one or more of these Item components

import React from 'react'
import { Container, Stack, Card,  CardBody, Button, Text,  Image } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"

const Item = ({id, name, artist, price, category, img}) => {
  return (
    <Container className='body__Container'>  
      <Card className='item__card' mt={'5'}>
        <CardBody p='0'>
          <Image className='item__card__image' src={img}/>
          <Stack m='4' spacing='3'>
            <Text className='item__card__headingName' >{name}</Text>
            <Text className='item__card__headingArtist'>{artist}</Text>
            <Text>
              Format: {category}
            </Text>
            <Text color='#66999B' fontSize='2xl'>
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <NavLink to={`/item/${id}`}>
          <Button  bg='#B3AF8F' fontSize={'1.1rem'} borderRadius={'0'} w={'15rem'} h={'3rem'}>
            + Details
          </Button>
        </NavLink>
      </Card>
    </Container>  
  )
}

export default Item
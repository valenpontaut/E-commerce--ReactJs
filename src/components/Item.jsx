/*The Item component is a card of every individual product. The ItemList component contains one or more of these Item components*/

import React from 'react'
import { 
  Container, 
  Stack, 
  Card,  
  CardBody, 
  CardFooter, 
  Divider, 
  ButtonGroup, 
  Button, 
  Text,  
  Image, 
  useToast 
} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {NavLink, Link} from "react-router-dom"

const Item = ({id, name, artist, decription, price, stock, category, img}) => {
  const toast = useToast()
  const idToast = 'cartWidgetId'
  const showSuccess = (message) => {
    if (!toast.isActive(idToast)) {
      toast({
        idToast,
        title: message,
        position: 'bottom',
        status: 'success',
        isClosable: true,
        duration: 2000
      })
    }
  }
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
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <ItemCount w={'6rem'} stock={stock}/>
            <Button _hover={{ bg: '#2B3A67' }} bg='#2B3A67' color='white' w={'6rem'} onClick={()=>showSuccess('Product succesfully added to cart')}>
            <span className="material-symbols-outlined" >shopping_cart</span>
            </Button>
          </ButtonGroup>
        </CardFooter>
        <NavLink to={`/item/${id}`}>
          <Button  bg='#B3AF8F' borderRadius={'0'} w={'15rem'}>
            Details
          </Button>
        </NavLink>
      </Card>
    </Container>  
  )
}

export default Item
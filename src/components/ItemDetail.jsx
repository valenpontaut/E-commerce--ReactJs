/*The ItemDetail component is a card of the selected product details*/

import React from 'react'
import { 
  Container, 
  Stack, 
  Card, 
  CardBody, 
  ButtonGroup, 
  Button, 
  Text, 
  Image, 
  useToast 
} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({name, artist, description, price, stock, category, img}) => {
  const toast = useToast()
  const id = 'cartWidgetId'
  const showSuccess = (message) => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title: message,
        position: 'bottom',
        status: 'success',
        isClosable: true,
        duration: 2000
      })
    }
  }
  return (
    <Container className='itemDetail__container' >  
      <Card  mt={'5'} 
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className='itemDetail__card'>
        <Image className='itemDetail__card__image' src={img}/>
        <Stack>
          <CardBody p='7' >
            <Text className='itemDetail__card__headingName' >{name}</Text>
            <Text className='itemDetail__card__headingArtist'>{artist}</Text>
            <Text mt={3} >Format: {category}</Text>
            <Text className='itemDetail__card__description'>{description}</Text>
            <Text mt={3} color='#66999B' fontSize='3xl' textAlign={'center'}>${price}</Text>
          </CardBody>
        </Stack>
      </Card>
      <ButtonGroup spacing='8' pt={5}>
        <ItemCount w={'15rem'} stock={stock}/>
        <Button 
          _hover={{ bg: '#2B3A67' }}  
          bg='#2B3A67' 
          color='white' 
          w={'15rem'} 
          onClick={()=>showSuccess('Product succesfully added to cart')}>
          <Text pr={2}>Add to cart</Text>   
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default ItemDetail
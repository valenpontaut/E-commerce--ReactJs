//The ItemDetail component is a card of the selected product details

import { Container, Stack, Card, CardBody, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({item, id, name, artist, description, price, stock, category, img}) => {
  const {addItem} = useContext(CartContext)
  const onAdd = (amount) => {
    addItem(item, amount);
  }
  return (
    <Container className='itemDetail__container' p={'4rem'}>  
      <Card 
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
            <Text mb={3}>Stock: {stock}</Text>
            <Text className='itemDetail__card__description'>{description}</Text>
            <Text mt={3} color='#66999B' fontSize='3xl' textAlign={'center'}>${price}</Text>
          </CardBody>
        </Stack>
      </Card>
      <ItemCount w={'15rem'} stock={stock} idItem={id} onAdd={onAdd}/>
    </Container>
  )
}

export default ItemDetail
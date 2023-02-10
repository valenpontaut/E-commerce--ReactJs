import React from 'react'
import { Container, Stack, Card, CardHeader, CardBody, CardFooter, Heading, Divider, ButtonGroup, Button, Text, Center, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { NavLink, Link} from "react-router-dom"

const Item = ({id, name, artist, decription, price, stock, category, img}) => {
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
            <Container rounded={'0.4rem'} variant='solid' bg='#2B3A67' color='white'>
              <ItemCount stock={stock}/>
            </Container>
            <Button variant='solid' bg='#2B3A67' color='white'>
            <span className="material-symbols-outlined" >shopping_cart</span>
            </Button>
          </ButtonGroup>
        </CardFooter>
        <NavLink to={`/item/${id}`}>
          <Button bg='#B3AF8F' borderRadius={'0'}>
            Details
          </Button>
        </NavLink>
        
      </Card>
    </Container>
    
  )
}

export default Item
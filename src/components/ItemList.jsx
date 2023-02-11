/*The ItemList component takes info of the selected product category to send it to the Item component. The ItemList component contains one or more of these Item components*/

import React from 'react'
import Item from './Item'
import {
  Container, 
  Flex, 
  Center, 
  Text, 
  Image
} from '@chakra-ui/react'

const ItemList = ({music}) => {
  if (music.length === 0) {
    return (
      <>
      <Center>
        <Image src='/src/img/oops.jpg'></Image>
      </Center>
      <Center><Text className='item__oopsText'>Unfortunatly we don't have any products with this format today</Text></Center>
      </>
    )
  } else {
    return (
      <Container>
        <Center>        
          <Flex>
            {music.map((mus)=>(
              <Item
                  key={mus.id}
                  id={mus.id}
                  name={mus.name}
                  artist={mus.artist}
                  description={mus.description}
                  price={mus.price}
                  stock={mus.stock}
                  category={mus.category}
                  img={mus.img}
              />
            ))}
          </Flex>            
        </Center>
      </Container>
    )
  }
}

export default ItemList
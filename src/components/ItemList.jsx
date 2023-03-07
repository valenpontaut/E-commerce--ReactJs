//The ItemList component takes info of the selected product category to send it to the Item component. The ItemList component contains one or more of these Item components

import Item from './Item'
import { Flex, Center, Text, Image } from '@chakra-ui/react'

const ItemList = ({products}) => {
  return(
    <>
    {(products.length === 0) ?
      <>
      <Center><Image src='/src/img/oops.jpg'></Image></Center>
      <Center><Text className='item__oopsText'>Unfortunatly we don't have any products with this format today</Text></Center>
      </>
      :
      <Center>        
        <Flex>
          {products?.map((prod)=>(
            <Item
            key={prod.id}
            id={prod.id}
            name={prod.name}
            artist={prod.artist}
            description={prod.description}
            price={prod.price}
            stock={prod.stock}
            category={prod.category}
            img={prod.img}/>
          ))}
        </Flex>            
      </Center>
    }
    </>
  ) 
}

export default ItemList
import { Container, Card, Image, Stack, CardBody, Heading, Text, Center, Box, Button} from '@chakra-ui/react'

const CartItem = ({item, id, name, artist, description, price, stock, category, img, amount, remove}) => {
  return (
    
    <div className='cartItem__div'>
        <div className='cartItem__card'>
            <Box className='cartItem__card__leftBox'>
                <Image className='cartItem__card__img' src={img}/>
                <Text fontSize={'1.5rem'} fontWeight={'bold'} pl={'2'} >{name} - {artist} </Text>
            </Box>
            <Box className='cartItem__card__rightBox'>
                <Text >{amount} x ${price}</Text>
                <Button onClick={() => remove(id) } m={'4'}>Remove from Cart</Button>
            </Box>
        </div>
    </div>
  )
}
export default CartItem
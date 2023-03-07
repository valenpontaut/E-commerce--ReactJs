//The CartItem component shows a card of every product added to cart to show it in the Cart component

import { Image, Text, Center, Box} from '@chakra-ui/react'

const CartItem = ({ id, name, artist, price, img, amount, remove}) => {
  return (
    <div className='cartItem__div'>
      <div className='cartItem__card'>
        <Box className='cartItem__card__leftBox'>
          <Image className='cartItem__card__img' src={img}/>
          <Text fontSize={'1.5rem'} fontWeight={'bold'} pl={'2'} >{name} - {artist} </Text>
        </Box>
        <Box className='cartItem__card__rightBox'>
          <Text className='cartItem__card__rightBox__amountxprice'>{amount} x ${price}</Text>
          <button onClick={() => remove(id) } m={'4'} className='cartItem__card__rightBox__deleteBtn'>
            <Center>
              <span className="material-symbols-outlined" id='cartItem__card__rightBox__deleteIcon'>delete</span>
            </Center>
          </button>
        </Box>
      </div>
    </div>
  )
}
export default CartItem